'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import Project from './components/project'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const projects = [
    {
      title1: "313DEVGRP",
      title2: "Doc page",
      src: "screen1.png"
    },

    {
      title1: "STREAMY",
      title2: "E-commerce",
      src: "screen2.png"
    },
    {
      title1: "GetMedia",
      title2: "iTunes",
      src: "screen3.png"
    },
    {
      title1: "Kaban",
      title2: "Board",
      src: "screen4.png"
    },
    {
      title1: "Job",
      title2: "Search Board",
      src: "screen5.png"
    }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {
  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null)
  const cursorLabel = useRef(null)

  let xMoveContainer = useRef(null)
  let yMoveContainer = useRef(null)
  let xMoveCursor = useRef(null)
  let yMoveCursor = useRef(null)
  let xMoveCursorLabel = useRef(null)
  let yMoveCursorLabel = useRef(null)

  useEffect( () => {
    // container
    xMoveContainer.current = gsap.quickTo("modalContainer.current", "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo("modalContainer.current", "top", {duration: 0.8, ease: "power3"})
    // cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    // cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }

  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
    <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.main}>
            <motion.div ref={modalContainer} className={styles.gallery}>
            <p>Featured Work</p>
                {
                projects.map((project, index) => {
                    return <Project key={index} project={project} manageModal={manageModal}/>
                })
                }
            </motion.div>
            <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </main>
  )
}

