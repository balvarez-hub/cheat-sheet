import { Fab, Grid } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { RECORDING_STATE } from '../audioRecorder';

const AudioPlayer = ({ audioPlayer, currentStatus }) => {
  const onPlay = () => {
    currentStatus === RECORDING_STATE.SUCCESS && audioPlayer.play();
  };
  const onPause = () => {
    currentStatus === RECORDING_STATE.SUCCESS && audioPlayer.pause();
  };
  return (
    currentStatus === RECORDING_STATE.SUCCESS && (
      <Grid item container spacing={1}>
        <Grid item>
          <Fab size="small" color="secondary" aria-label="add" onClick={onPlay}>
            <PlayArrowIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab size="small" color="secondary" aria-label="add" onClick={onPause}>
            <PauseIcon />
          </Fab>
        </Grid>
      </Grid>
    )
  );
};

export default AudioPlayer;
