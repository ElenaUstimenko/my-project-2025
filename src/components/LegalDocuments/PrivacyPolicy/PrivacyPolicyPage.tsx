'use client';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import classes from '@/components/LegalDocuments/Legal.module.scss';

export const PolicyPage = () => {
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

  return (
    <section className={classes.page}>
      <Header />
      <motion.div
        className={classes.legalAbout}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          className={classes.legalAbout_text}
          variants={itemVariants}
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
