'use client'
import { useEffect, useState } from "react"
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion' // Framer Motion for animations
import Preloader from '../components/Preloader'
import Landing from '../components/Landing'
import Works from '../components/Works'
import AboutMe from '../components/AboutMe'
// import Projects from '../components/Projects'
// import SlidingImages from '../components/SlidingImages'
import Footer from '../components/Footer'


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
      <AboutMe />
      <Works />
      <Footer /> 
      {/*       
      <Projects />
      <SlidingImages />
      */}
    </main>
  );
}
