import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { AudioPermission } from '../AudioPermission';
import { AudioPlayer } from '../audioPlayer';
import { AudioRecorder, RECORDING_STATE } from '../audioRecorder';

const AudioComponent = () => {
  const [currentStatus, setCurrentStatus] = useState(RECORDING_STATE.INACTIVE);
  const [isAudioPermisionChanged, changeAudioPermission] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(null);

  const list = [
    <AudioPermission isAudioPermisionChanged={isAudioPermisionChanged} changeAudioPermission={changeAudioPermission} />,
    <Grid item container justify="center" alignContent="flex-start" spacing={1}>
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
    </Grid>,
  ];

  return (
    <Grid container spacing={1}>
      {list.map((element, index) => (
        <Grid container item key={index} justify="center" alignContent="center">
          {element}
        </Grid>
      ))}
    </Grid>
  );
};

export default AudioComponent;
