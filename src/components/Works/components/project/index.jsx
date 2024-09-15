'use client'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function index({project, index, manageModal}) {
    const [isActive, setIsActive] = useState(false);
    const { title1, title2, src, } = project;

    return (
       <div onMouseEnter={(e) => {
        setIsActive(true)
        manageModal(true, index, e.clientX, e.clientY)
       }} onMouseLeave={(e) => {
        setIsActive(false)
        manageModal(false, index, e.clientX, e.clientY)
        }} className={styles.project}>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img src={`/images/${src}`} />
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}