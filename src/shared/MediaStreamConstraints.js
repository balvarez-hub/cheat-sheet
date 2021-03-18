const MediaStreamConstraints = {
  AUDIO: 'audio',
  VIDEO: 'video',
};

const getAudioQuery = () => ({ audio: true, video: false });
const getVideoQuery = () => ({ audio: false, video: true });
const getAllQuery = () => ({ audio: true, video: true });

export default MediaStreamConstraints;
export { getAudioQuery, getVideoQuery, getAllQuery };
