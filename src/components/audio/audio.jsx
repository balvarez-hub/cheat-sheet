import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { AudioPermission } from '../AudioPermission';
import { AudioPlayer } from '../audioPlayer';
import { AudioRecorder, RECORDING_STATE } from '../audioRecorder';

const AudioComponent = () => {
  const [currentStatus, setCurrentStatus] = useState(RECORDING_STATE.INACTIVE);
  const [isAudioPermisionChanged, changeAudioPermission] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(null);

  return (
    <Grid container justify="center" alignContent="center" spacing={1}>
      <Grid item>
        <AudioPermission isAudioPermisionChanged={isAudioPermisionChanged} changeAudioPermission={changeAudioPermission} />
      </Grid>
      <Grid item container justify="center" alignContent="center" spacing={1}>
        <Grid item>
          <AudioRecorder
            currentStatus={currentStatus}
            setCurrentStatus={setCurrentStatus}
            setAudioPlayer={setAudioPlayer}
            changeAudioPermission={changeAudioPermission}
          />
        </Grid>
        <Grid item>
          <AudioPlayer audioPlayer={audioPlayer} currentStatus={currentStatus} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AudioComponent;
