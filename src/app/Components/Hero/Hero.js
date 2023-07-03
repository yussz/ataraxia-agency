'use client';
import {AnimatePresence, easeIn, motion} from 'framer-motion'
import { useEffect } from 'react';
import styles from './Hero.module.css'
import NavBar from '../NavBar/NavBar'


//**STAGGER CONTAINER**//
const container = {
    animate : {
        transition: {
            staggerChildren:0.1,
            delayChildren:1.1,
            ease:'ease'
           
        }
    }
}
//**VERTICAL TRANSITION **//
const letterAnimation = {
    initial: {
        y:600,

      },
      animate: {
        y:0,
      
        transition: {
          ease: [0.5, 0.02, -0.05, 0.95],
          duration:1
        }
      }
}




const TopRow = ({title}) => {
        return(
            <div className={`${styles.row} ${styles.top_row}`}>
   <AnimatedLetters title={title}/>
            </div>
        )
}
const MiddleRow = ({title}) => {
    return(
        <div className={`${styles.row} ${styles.middle_row}`}>
               <AnimatedLetters title={title}/>
        </div>
    )
}
const BottomRow = ({title}) => {
    return(
        <div className={`${styles.row} ${styles.bottom_row}`}>
            <AnimatedLetters title={title}/>
        </div>
    )
}

const AnimatedLetters = ({title}) => {
        return (
            <motion.span
            variants={container}
            initial="initial"
            animate="animate"
            >
            {[...title].map((letter,i) => (
                <motion.span className={styles.letters} variants={letterAnimation} key={i}>{letter}</motion.span>
            ))}
            </motion.span>
        )
}





export default function Hero({loading}) {
    
    useEffect(() => {
        setTimeout(()=> {
            document.body.style.overflowY='auto'
            document.body.style.overflowX='hidden'
            
        },3000)
    }, []);

        return (
            <div className={styles.hero}>
            <NavBar/>
            <motion.div className={styles.hero_grid}
            layoutId='title'
           
            variants={container}>

            
            <TopRow title={"creating"}/>
            <MiddleRow title={"digital"}/>
            <BottomRow title={"experiences"}/>

            <motion.div className={styles.paragraph}>
            <p>ataraxia refers to a state of tranquility and freedom from disturbance. when providing website development services, the goal is to offer clients a sense of calm and confidence in their online presence.</p>
            </motion.div>
            {/* <div className={styles.button}>

            </div> */}

    

            </motion.div>
            </div>
        )
}