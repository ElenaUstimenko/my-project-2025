'use client';
import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import classes from './FirstSection.module.scss';

interface MatrixColumn {
  id: number;
  animationDelay: string;
  animationDuration: string;
}

export const FirstSection = () => {
  const [matrixColumns, setMatrixColumns] = useState<MatrixColumn[]>([]);

  const createMatrix = useCallback(() => {
    const colCount = Math.floor(window.innerWidth / 20);

    setMatrixColumns(
      Array.from({ length: colCount }, (_, index) => ({
        id: index,
        animationDelay: `-${(Math.random() * 5).toFixed(1)}s`,
        animationDuration: `${10 + Math.random() * 10}s`,
      })),
    );
  }, []);

  useEffect(() => {
    createMatrix();
    window.addEventListener('resize', createMatrix);
    return () => window.removeEventListener('resize', createMatrix);
  }, [createMatrix]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className={classes.firstSection}>
      <div className={classes.firstSection_matrixContainer}>
        {matrixColumns.map((column) => (
          <div
            key={column.id}
            className={classes.matrixColumn}
            style={
              {
                '--col-index': column.id,
                '--col-count': matrixColumns.length,
                animationDelay: column.animationDelay,
                animationDuration: column.animationDuration,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <motion.div
        className={classes.firstSection_contentWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={containerVariants}
      >
        <h1 className={classes.firstSection_title}>
          Информация для путешествия в Республику Корея
        </h1>
        <motion.div
          className={classes.firstSection_contentBox}
          variants={itemVariants}
          transition={{ type: 'tween', duration: 0.2 }}
          whileHover={{ x: -6 }}
        >
          <p className={classes.firstSection_contentBoxText}>
            На нашем сайте вы найдёте полезную информацию для поездки в
            Республику Корея, а может просто получите немного вдохновения для
            своего следующего путешествия в эту прекрасную страну
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
