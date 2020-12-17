import { motion } from "framer-motion"
import styles from '../styles/Tagline.module.css'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
}
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}
  
  export const TagLine = () => (
    <motion.ul
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="visible"
    >
        <motion.li className={styles.item} variants={item}>Student</motion.li>
        <motion.li className={styles.item} variants={item}>Developer</motion.li>
    </motion.ul>
);  

export default TagLine