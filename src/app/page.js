'use client'
import { useEffect, useState } from "react"
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion' // Framer Motion for animations
import Preloader from '../components/Preloader'
import Landing from '../components/Landing'
import Works from '../components/Works'
// import Projects from '../components/Projects'
// import Description from '../components/Description'
// import SlidingImages from '../components/SlidingImages'
// import Contact from '../components/Contact'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          // Locomotive Scroll for smooth scroll
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Works />
      {/*       
      <Projects />
      <Description />
      <SlidingImages />
      <Contact /> */}
    </main>
  );
}
