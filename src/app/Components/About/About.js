'use client';
import styles from './About.module.css'
import {motion , useInView} from 'framer-motion'
import { useRef,useEffect } from 'react';



export const metadata = {
    title: "Ataraxia",
    description: 'Ataraxia uses next.js and tailwindcss to create stunning websites.',
    keywords: ['web design','web development','digital marketing']
}

export default function About() {



    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})
 
    const numberAnimation = {
        animate: {
            opacity:isInView? 1: 0,
           
          
        }
    }
    return (
        <div id='about'  className={styles.about}>
        <div className={styles.about_grid}>
        <section className={styles.top_row}>
       
            <h3>We&apos;re a creative web design agency based in New Jersey that crafts beautiful and original websites.</h3>
            <span  style={{color:'pink'}}>(001) about</span>
        </section>

        <section className={styles.bottom_row}>
            
        <div className={styles.list_row}>
           <motion.span variants={numberAnimation} animate="animate" ref={ref} style={{color:'pink'}}>(001)</motion.span>    
           <p>We harness the power of Next.js and Tailwind CSS to craft stunning, performant websites that seamlessly blend cutting-edge technology with elegant design.</p> 
        </div>

        <div className={styles.list_row}>
        <motion.span variants={numberAnimation} animate="animate" style={{color:'pink'}}>(002)</motion.span>
        <p>Our goal is to provide a harmonious web development process that allows clients to focus on their business objectives while entrusting their online success to us.</p>
        </div>


        </section>


        </div>
        </div>
    )
}