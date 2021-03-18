import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { audioQuery } from '../../shared/MediaStreamConstraints';

const Audio = () => {
  const STATES = {
    PROMPT: 'prompt',
    GRANTED: 'granted',
    DENIED: 'denied',
  };
  const [value, setValue] = useState('');

  const updatePermission = useCallback(async () => {
    const permissions = await navigator.permissions.query({ name: 'microphone' });
    permissions?.state && setValue(permissions.state);
  }, []);

  useEffect(() => {
    updatePermission();
  }, [updatePermission, value]);

  const getAudioPermission = async (event) => {
    try {
      await navigator.mediaDevices.getUserMedia(audioQuery);
    } catch (e) {
      console.error(`Error: ${e}`);
    } finally {
      updatePermission();
    }
  };

  const requestAudioBtn = (
    <div>
      <Button variant="outlined" color="primary" size="medium" onClick={getAudioPermission}>
        Pedir micro
      </Button>
    </div>
  );
  const currentSudioStatus = (
    <FormControl component="fieldset">
      <FormLabel component="legend">Permisos del micro</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value}>
        <FormControlLabel disabled value={STATES.PROMPT} control={<Radio />} label={STATES.PROMPT} />
        <FormControlLabel disabled value={STATES.GRANTED} control={<Radio />} label={STATES.GRANTED} />
        <FormControlLabel disabled value={STATES.DENIED} control={<Radio />} label={STATES.DENIED} />
      </RadioGroup>
    </FormControl>
  );

  const list = [requestAudioBtn, currentSudioStatus];

  return (
    <Grid container justify="flex-start" alignContent="center">
      {list.map((element, index) => (
        <Grid container key={index} item xs={3} justify="center">
          {element}
        </Grid>
      ))}
    </Grid>
  );
};

export default Audio;
