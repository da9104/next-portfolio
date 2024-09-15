import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../modules/RoundedButton';

export default function index() {
    const phrase = "As a double degree holder in Computer Science, I firmly advocate for the importance of self-directed learning and self-study in the ever-evolving tech landscape";
    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map((word, index) => {
                        return (
                        <span key={index} className={styles.mask}>
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span>
                        </span>
                        )
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className='hidden sm:block sm:block'>
                    I'm a Front-end Engineer with 1+ years of experience, proficient in UX * UI design, JavaScript, and React.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>

            </div>
        </div>
    )
}