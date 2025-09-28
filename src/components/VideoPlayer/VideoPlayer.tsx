'use client';
import ReactPlayer from 'react-player';
import { VideoPlayerProps } from './VideoPlayer.props';
import classes from './VideoPlayer.module.scss';
import { useEffect, useState } from 'react';

export const VideoPlayer = ({
  url,
  isModalOpen,
}: VideoPlayerProps & { isModalOpen: boolean }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setIsReady(false);
    }
  }, [isModalOpen]);

  return (
    <div className={classes.player_wrapper}>
      <ReactPlayer
        className={classes.react_player}
        url={url}
        playing={isModalOpen && isReady}
        controls={true}
        width='100%'
        height='100%'
        light={false}
        onReady={() => setIsReady(true)}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              disablePictureInPicture: true,
              playsInline: true,
            },
          },
        }}
      />
    </div>
  );
};
