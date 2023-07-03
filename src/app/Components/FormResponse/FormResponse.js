'use client';
import styles from './FormResponse.module.css'
import { PacmanLoader } from "react-spinners"
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
export default function FormResponse({result}) {

    const [timer,setTimer] = useState(5)   
    const router = useRouter()
    useEffect(() => {
        if(timer > 0) {
            setTimeout(()=>{
                setTimer(timer-1)
                },1000)
        }
        if(timer===0) {
            router.push('/')
        }
    }, [timer]);

    return (
        <motion.div className={styles.form_response}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        >
        {result ==='success' ? 
          <>
          <h1>Thank you for contacing us!</h1>
          <h2>Please allow 24 hours for a response to inquiries.</h2>
            <h3>Redirecting in {timer}</h3>
            <PacmanLoader color='pink'/>
            </>
            :
            <>
          <h1>There was an error in receieving your email,</h1>
          <h1>Please try again later.</h1>
            <h3>Redirecting in {timer}</h3>
            <PacmanLoader color='pink'/>
            </>
          }
        </motion.div>
    )
}