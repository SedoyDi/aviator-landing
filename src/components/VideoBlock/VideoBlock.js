import React from 'react';
import './VideoBlock.css';
import videoMp4 from '../../videos/videoMp4.mp4';

function VideoBlock() {
    const [muted, setMuted] = React.useState(true);
    return (
        <div className='video-block'>
            <video
                className='video-block__video'
                autoPlay
                muted={muted}
                loop
                onClick={() => setMuted(!muted)}>
                <source src={videoMp4} type="video/mp4" />
            </video>
            <div className='video-block__time-line'>
                <span />
            </div>
        </div>
    )
}

export default VideoBlock;
