const MediaStreamConstraints = {
  AUDIO: 'audio',
  VIDEO: 'video',
};

const audioQuery = { audio: true, video: false };
const videoQuery = { audio: false, video: true };
const allQuery = { audio: true, video: true };

export default MediaStreamConstraints;
export { audioQuery, videoQuery, allQuery };
