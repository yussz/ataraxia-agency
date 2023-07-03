'use client';
import Image from 'next/image'
import styles from './page.module.css'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import { AnimatePresence, motion } from 'framer-motion';
import { useState ,useEffect} from 'react';
import Loading from './Components/Loading/Loading';
import Hero from './Components/Hero/Hero';
import Contact from './Components/Contact/Contact';
import Form from './Components/Form/Form';

export default function Home() {
  const [loading,setLoading] = useState(true)

  const [form,setForm] = useState(false)

  const buttonAnimation = {
    initial: {
       x:0,
       y:0,
       backgroundColor: "#F0EFF1"
  
        
    },
    animate: {
            backgroundColor: "pink",
            x:0,
            y:'-28vw',
            
    },
    
  }
 

  return (
    <AnimatePresence mode='sync'>
    {loading ? (
        <motion.div
        key='loader'
        >
        <Loading setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Hero loading={loading}/>
          <About />
          <Services />
          {form ? <Form setForm={setForm} form={form}/> : <Contact setForm={setForm}/>}
          {!loading && (
            <motion.div className={styles.banner} 
              layoutId="banner"
                initial={{opacity:0.25}} animate={{opacity:1}} transition={{ duration:1, ease:[0.5, 0.02, 0.01, 0.95]} }
            >
           <motion.div className={styles.button}
            variants={buttonAnimation} initial="initial" animate="animate" transition={{repeat:Infinity,repeatType:"reverse", duration:1,delay:1}}
        >
        
        </motion.div>
            </motion.div>
          )}
        </>
      )}
   
    </AnimatePresence>
   
  )
}
