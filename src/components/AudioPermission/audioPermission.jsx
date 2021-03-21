import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';

const PERMISSION_STATES = {
  PROMPT: 'prompt',
  GRANTED: 'granted',
  DENIED: 'denied',
};
const queryAudioPermissionStatus = async () => {
  return await navigator.permissions.query({ name: 'microphone' });
};

const AudioPermission = ({ isAudioPermisionChanged, changeAudioPermission }) => {
  const [currentState, setCurrentState] = useState(PERMISSION_STATES.PROMPT);

  const updatePermissionStatus = useCallback(async () => {
    const permissions = await queryAudioPermissionStatus();
    permissions?.state && setCurrentState(permissions.state);
  }, []);

  useEffect(() => {
    updatePermissionStatus();
  }, [isAudioPermisionChanged, updatePermissionStatus]);

  return (
    <FormControl component="fieldset">
      <FormLabel>{'Permisos del micro'}</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={currentState}>
        <FormControlLabel disabled value={PERMISSION_STATES.PROMPT} control={<Radio />} label={PERMISSION_STATES.PROMPT} />
        <FormControlLabel disabled value={PERMISSION_STATES.GRANTED} control={<Radio />} label={PERMISSION_STATES.GRANTED} />
        <FormControlLabel disabled value={PERMISSION_STATES.DENIED} control={<Radio />} label={PERMISSION_STATES.DENIED} />
      </RadioGroup>
    </FormControl>
  );
};

export default AudioPermission;
export { PERMISSION_STATES, queryAudioPermissionStatus };
