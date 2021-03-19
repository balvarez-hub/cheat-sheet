import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import MediaStreamConstraints from '../../shared/MediaStreamConstraints';

const AudioComponent = () => {
  const MIME_TYPE = 'audio/webm';
  const CODEC = 'codecs=opus';
  const STATES = {
    PROMPT: 'prompt',
    GRANTED: 'granted',
    DENIED: 'denied',
  };
  const [value, setValue] = useState('');
  const mediaStream = useRef();
  const mediaRecorder = useRef();
  const chunks = useRef();

  const updatePermissionStatus = useCallback(async () => {
    const permissions = await navigator.permissions.query({ name: 'microphone' });
    permissions?.state && setValue(permissions.state);
  }, []);

  useEffect(() => {
    updatePermissionStatus();
  }, [updatePermissionStatus, value]);

  const getAudioPermission = async (event) => {
    try {
      mediaStream.current = await navigator.mediaDevices.getUserMedia(MediaStreamConstraints.AUDIO);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
    updatePermissionStatus();
  };
  const onRecord = async () => {
    chunks.current = [];
    mediaRecorder.current = new MediaRecorder(mediaStream.current, { mimeType: `${MIME_TYPE};${CODEC}` });
    mediaRecorder.current.addEventListener('dataavailable', (e) => {
      chunks.current?.push(e.data);
    });
    mediaRecorder.current.addEventListener('stop', () => {
      const blob = new Blob(chunks.current, { type: `${MIME_TYPE};${CODEC}` });
      const url = URL.createObjectURL(blob);
      const tmp = new Audio(url);
      tmp.play();
    });
    mediaRecorder.current.start();
  };
  const onPause = async () => {};
  const onContinue = async () => {};
  const onCancell = async () => {
    // https://developers.google.com/web/updates/2015/07/mediastream-deprecations?hl=en#stop-ended-and-active
    // Previous Chrome 45
    mediaRecorder.current?.stop();
    // Later Chrome 45
    mediaStream.current?.getTracks().forEach((track) => track.stop());
  };

  const currentSudioStatus = (
    <FormControl component="fieldset">
      <FormLabel>{'Permisos del micro'}</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value}>
        <FormControlLabel disabled value={STATES.PROMPT} control={<Radio />} label={STATES.PROMPT} />
        <FormControlLabel disabled value={STATES.GRANTED} control={<Radio />} label={STATES.GRANTED} />
        <FormControlLabel disabled value={STATES.DENIED} control={<Radio />} label={STATES.DENIED} />
      </RadioGroup>
    </FormControl>
  );

  const dataRecordButtons = [
    { text: 'Pedir micro', onclick: getAudioPermission },
    { text: 'Grabar', onclick: onRecord },
    { text: 'Pausar', onclick: onPause },
    { text: 'Continuar', onclick: onContinue },
    { text: 'Cancelar', onclick: onCancell },
  ];
  const recordBtns = (
    <Grid container justify="flex-start" spacing={1}>
      {dataRecordButtons.map((element, index) => (
        <Grid item key={index}>
          <Button variant="outlined" color="primary" size="small" onClick={element.onclick}>
            {element.text}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
  const list = [currentSudioStatus, recordBtns];

  return (
    <Grid container justify="flex-start" alignContent="center" spacing={1}>
      {list.map((element, index) => (
        <Grid container item key={index} xs={12} sm={4} justify="center">
          {element}
        </Grid>
      ))}
    </Grid>
  );
};

export default AudioComponent;
