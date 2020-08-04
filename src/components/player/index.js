import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.scss';

const Player = ({ src }) => {
  const additional = [];
  return (
    <AudioPlayer
      src={src}
      autoPlay="false"
      autoPlayAfterSrcChange="false"
      showJumpControls="false"
      customAdditionalControls={additional}
      customVolumeControls={additional}
    />
  )
};

export default React.memo(Player);