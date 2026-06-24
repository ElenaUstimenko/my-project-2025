'use client';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PhotoList } from '@/components/CityPage/PhotoList';
import { VideoList } from '@/components/CityPage/VideoList';
import type { City } from './CityPage.props';
import classes from '@/components/CityPage/CityPage.module.scss';

interface CityPageProps {
  city: City;
}

export const CityPage = ({ city }: CityPageProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const hasImages = city.images.length > 0;
  const hasVideos = city.video.length > 0;

  return (
    <section className={classes.cityPage}>
      <Header />
      <motion.div
        className={classes.cityAbout}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          className={classes.cityAbout_title}
          variants={itemVariants}
          whileHover={{ x: -6 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          {city.name}
        </motion.h2>
        <motion.p
          className={classes.cityAbout_text}
          variants={itemVariants}
          whileHover={{ x: -6 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          {city.text0}
        </motion.p>
        <motion.p
          className={classes.cityAbout_text}
          variants={itemVariants}
          whileHover={{ x: -6 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          {city.text1}
        </motion.p>
        <motion.p
          className={classes.cityAbout_text}
          variants={itemVariants}
          whileHover={{ x: -6 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          {city.text2}
        </motion.p>
      </motion.div>
      {hasImages && (
        <>
          <p className={`${classes.cityAbout_text} ${classes.text_shine}`}>
            кликни по фото, чтобы посмотреть подробнее
          </p>
          <PhotoList city={city} />
        </>
      )}
      {hasVideos && (
        <>
          <p className={`${classes.cityAbout_text} ${classes.text_shine}`}>
            кликни по видео, чтобы начать просмотр
          </p>
          <VideoList city={city} />
        </>
      )}
      <Footer />
    </section>
  );
};
