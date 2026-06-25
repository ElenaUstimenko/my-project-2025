'use client';
import { VideoListProps } from '../CityPage.props';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Modal } from '@components/Modal/Modal';
import { VideoPlayer } from '@components/VideoPlayer/VideoPlayer';
import Image from 'next/image';
import {
  compactContainerVariants,
  videoItemVariants,
} from '@utils/motionVariants';
import classes from './VideoList.module.scss';

export const VideoList: React.FC<VideoListProps> = ({ city }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!city.video || city.video.length === 0) {
    return null;
  }

  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <div className={classes.videoList}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={compactContainerVariants}
          className={classes.videoList_container}
        >
          {city.video.map((video) => (
            <motion.div
              key={video.id}
              variants={videoItemVariants}
              whileHover={{ x: -6, scale: 1.02 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className={classes.videoList_card}
            >
              <div className={classes.videoWrapper}>
                <div className={classes.videoPoster}>
                  <Image
                    src={video.img}
                    alt="Заглушка видео"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={classes.posterImage}
                  />
                </div>
                <video
                  className={classes.videoList_video}
                  preload="metadata"
                  poster={video.img}
                >
                  <source src={video.src} type="video/webm" />
                  Упс, похоже Ваш браузер не поддерживает видео
                </video>

                <button
                  type="button"
                  className={classes.btn_play}
                  aria-label={`Открыть видео ${video.id}`}
                  onClick={() => handleVideoClick(video.src)}
                ></button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedVideo && (
          <VideoPlayer url={selectedVideo} isModalOpen={isModalOpen} />
        )}
      </Modal>
    </>
  );
};
