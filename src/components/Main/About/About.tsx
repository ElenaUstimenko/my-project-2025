'use client';
import { motion } from 'framer-motion';
import classes from './About.module.scss';

export const About = () => {

  const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

  return (
    <motion.section 
      className={classes.about}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={containerVariants}>
      <h2 className={`${classes.about_title} ${classes.text_shine}`}>
        Страна утренней свежести
      </h2>
      <motion.p 
        className={classes.about_text} 
        variants={itemVariants}
        whileHover={{ x: -6 }}
        transition={{ type: 'tween', duration: 0.2 }}>
        Республика Корея (или как её чаще называют Южная Корея) называется «страной утренней свежести». Звучит красиво, но откуда произошло такое название? 
      </motion.p>
      <motion.p 
        className={classes.about_text} 
        variants={itemVariants}
        whileHover={{ x: -6 }}
        transition={{ type: 'tween', duration: 0.2 }}>
        Немного истории: корейская письменность появилась в 15 веке, но довольно скромно использовалась вплоть до 19-20 веков. Устный корейский язык был, но для письма корейцы использовали иероглифы Китая
      </motion.p>
      <motion.p 
        className={classes.about_text} 
        variants={itemVariants}
        whileHover={{ x: -6 }}
        transition={{ type: 'tween', duration: 0.2 }}>
        Корейцы до 20 века называли свою страну Чосон 조선 . Название было записано когда-то в древности китайцами их же иероглифами, «на слух», как они расслышали от древних племён Корейского полуострова. Так что получилось, что слово - название страны - есть, а что оно обозначает - непонятно
      </motion.p>
      <motion.p 
        className={classes.about_text} 
        variants={itemVariants}
        whileHover={{ x: -6 }}
        transition={{ type: 'tween', duration: 0.2 }}>
        Поэтому появилась серьёзная задача - найти красивое название к иероглифам. Название «Чосон» состоит из двух иероглифов: 朝 «Чо» и 鮮 «Сон», к которым и были подобраны сочетающиеся слова, вошедшие в общее употребление:
«Чо» - утро, «Сон» - свежесть. Так появилось название «Страна утренней свежести»
      </motion.p>
      <motion.p 
        className={classes.about_text} 
        variants={itemVariants}
        whileHover={{ x: -6 }}
        transition={{ type: 'tween', duration: 0.2 }}>
        Интересно, что корейцы называют  свою страну ещё «страной с четырьмя временами года», полагая, что все четыре времени года ярко выражены именно в их стране. А вот в то, что у них самое свежее утро, они всё-таки не верят
      </motion.p>
    </motion.section>
  );
};