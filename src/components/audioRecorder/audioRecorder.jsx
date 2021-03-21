import { Fab, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const MIME_TYPE = 'audio/webm';
const CODEC = 'codecs=opus';
const RECORDING_STATE = {
  INACTIVE: 'inactive',
  RECORDING: 'recording',
  SUCCESS: 'success',
};
const MediaStreamConstraints = {
  AUDIO: { audio: true },
  VIDEO: { video: true },
};

const AudioRecorder = ({ currentStatus, setCurrentStatus, setAudioPlayer, changeAudioPermission }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const mediaStream = useRef();
  const mediaRecorder = useRef();
  const chunks = useRef();

  const playTimer = useCallback(async () => {
    if (currentStatus === RECORDING_STATE.RECORDING) {
      seconds + 1 === 60 && setMinutes(minutes + 1);
      setSeconds((seconds + 1) % 60);
    }
  }, [currentStatus, minutes, seconds]);

  useEffect(() => {
    if (currentStatus === RECORDING_STATE.RECORDING) {
      const interval = setInterval(playTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [playTimer, currentStatus, seconds, minutes]);

  const openStream = async () => {
    //mediaStream.current && (await closeStream());
    try {
      mediaStream.current = await navigator.mediaDevices.getUserMedia(MediaStreamConstraints.AUDIO);
      setCurrentStatus(RECORDING_STATE.RECORDING);
      mediaRecorder.current = new MediaRecorder(mediaStream.current, { mimeType: `${MIME_TYPE};${CODEC}` });
      chunks.current = [];
      mediaRecorder.current.addEventListener('dataavailable', (e) => {
        chunks.current?.push(e.data);
      });

      mediaRecorder.current.addEventListener('stop', () => {
        const blob = new Blob(chunks.current, { type: `${MIME_TYPE};${CODEC}` });
        const url = URL.createObjectURL(blob);
        const tmp = new Audio(url);
        setAudioPlayer(tmp);
      });
      mediaRecorder.current.start();
    } catch (e) {
      console.error(`Error: ${e}`);
      setCurrentStatus(RECORDING_STATE.INACTIVE);
    }
    changeAudioPermission(true);
  };

  const closeStream = async () => {
    // https://developers.google.com/web/updates/2015/07/mediastream-deprecations?hl=en#stop-ended-and-active
    // Previous Chrome 45
    //mediaRecorder.current?.stop();
    // Later Chrome 45
    //chunks.current = [];
    mediaStream.current?.getTracks().forEach((track) => track.stop());
    mediaRecorder.current?.stop();
    setMinutes(0);
    setSeconds(0);
  };

  const onRecord = () => openStream();
  const onCancell = () => {
    setCurrentStatus(RECORDING_STATE.INACTIVE);
    closeStream();
  };
  const onSuccess = () => {
    setCurrentStatus(RECORDING_STATE.SUCCESS);
    closeStream();
  };

  switch (currentStatus) {
    case RECORDING_STATE.RECORDING:
      return (
        <Grid item container justify="center" alignItems="center" spacing={1}>
          <Grid item>
            <div>{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</div>
          </Grid>
          <Grid item>
            <Fab size="small" color="secondary" aria-label="add" onClick={onCancell}>
              <CloseIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="small" color="secondary" aria-label="add" onClick={onSuccess}>
              <CheckIcon />
            </Fab>
          </Grid>
        </Grid>
      );

    case RECORDING_STATE.INACTIVE:
    case RECORDING_STATE.SUCCESS:
    default:
      return (
        <Grid item>
          <Fab size="small" color="secondary" aria-label="add" onClick={onRecord}>
            <MicIcon />
          </Fab>
        </Grid>
      );
  }
};

export default AudioRecorder;
export { RECORDING_STATE };
