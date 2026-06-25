'use client';
import { motion } from 'framer-motion';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import {
  pageContainerVariants,
  slideUpItemVariants,
} from '@utils/motionVariants';
import classes from '@components/LegalDocuments/Legal.module.scss';

export const PolicyPage = () => {
  return (
    <section className={classes.page}>
      <Header />
      <motion.div
        className={classes.legalAbout}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={pageContainerVariants}
      >
        <motion.h2
          className={classes.legalAbout_text}
          variants={slideUpItemVariants}
          whileHover={{ x: -6 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          Место в будущем может быть заполнено текстом Политики
          конфиденциальности...
        </motion.h2>
      </motion.div>
      <Footer />
    </section>
  );
};
