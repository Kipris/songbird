import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.scss';

const Player = React.forwardRef(({ src, hidden = false }, ref) => (
  <AudioPlayer
    ref={ref}
    style={hidden ? {display: "none"} : {}}
    src={src}
    autoPlay={false}
    autoPlayAfterSrcChange={false}
    showJumpControls={false}
    customAdditionalControls={[]}
  />
))

export default React.memo(Player);
