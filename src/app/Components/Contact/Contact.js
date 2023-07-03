import styles from './Contact.module.css'
import  {motion,useInView} from 'framer-motion'
import { useRef } from 'react'
export default function Contact({setForm}) {

  const ref = useRef(null)
  const isInView = useInView(ref,{once:false})

  const buttonAnimation = {
    animate: isInView? {
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 360, 360, 0],
      borderRadius: ["50%", "50%", "20%", "20%", "50%"],
      transition:{duration:3,repeat:Infinity,repeatDelay:0.5, ease:[0.5, 0.02, 0.01, 0.95]}
    } : ''
    
  }
    return (
        <motion.div id='contact' className={styles.contact}
       
       >
 {/* <p style={{color:'pink'}}>(004) contact</p> */}
   <motion.div
   variants={buttonAnimation}
   animate="animate"
    layoutId='form'
   ref={ref}
   onClick={()=>{setForm(true)}}
    className={styles.button}
    
  >
    <h3>(003) contact</h3>
  </motion.div>
  
        </motion.div>
    )
}