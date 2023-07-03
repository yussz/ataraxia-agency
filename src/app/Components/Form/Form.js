'use client';
import styles from './Form.module.css'
import { useRef,useState } from 'react';
import {motion,useInView} from 'framer-motion'
import {useRouter} from 'next/navigation';
import { BounceLoader } from "react-spinners"
import axios from 'axios';

const FormQuestion = ({number,title, placeholder,name,type,minLength,maxLength}) => {
    
    
        return (
            <div className={styles.form_component}>
               
                    <span className={styles.question_number}>{number}</span>
                    
                    <section className={styles.title_input}>
                <h4>{title}</h4>
                {name==="service" ? 
                <select name={name}>
                    <option value='Web Development & Design'>Web Development & Design</option>
                    <option value='Branding'>Branding</option>
                    <option value='Digital Marketing'>Digital Marketing</option>
                </select>
                
                 : name==='number'? <motion.input minLength={'10'} maxLength={'12'}   name={name} type={type} required  placeholder={placeholder}/> : <motion.input name={name} type={type} required  placeholder={placeholder}/> }
                </section>
            </div>
        )
}


export default function Form({setForm,form}) {
  const router = useRouter()
    const [formValid,setFormValid] = useState(false)
    const [loading,setLoading] = useState(false)




   const handleSubmit = async(e) => {

    e.preventDefault();
  
    const formData={}
    Array.from(e.currentTarget.elements).forEach(field => {
      
        if(!field.name) {
         return;
        }else {
            setFormValid(true)
            formData[field.name] = field.value;
            
        }
     
       
    })
 
  
       if(loading) {
        await axios.post('/api/sendEmail', {
            method:'POST',
            body:formData,
            headers: {
                "Content-Type":"application/json"
            }
         
        })
        .then((res) => {
          
            setTimeout(()=> {
                if(res.status === 200) {
                    router.push('/Success')
                }else {
                    router.push('/Error')
                }
            },3000)
        })  
       }
 
           
  
    
  
    
   }
    
    

    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    

    const circleContainer = {
        animate: {
            x: isInView? 0:-500,
            transition: {
                duration:1,
                ease:'easeIn',
             
            }
        }
    }
    const circleAnimation = {
            animate: {
                   rotate:180,
                   transition:{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:2
                   }
            },
    }

   
    return (
        <motion.div id='contact' className={styles.form}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
  
        >
       <div className={styles.form_grid}>

     
        <section className={styles.title}>
    <p style={{color:'pink',fontSize:'1.5rem'}}>(003) contact</p>
      <h1>Let&apos;s work together!</h1>
           
        <p>Let us help you become even greater at what you do.
        <br/>
    
        Fill out the following form and we will get back to you in the next 24 hours.
        </p>
      
        </section>
   

 
    
      
      <form  method="POST" onSubmit={handleSubmit} className={styles.form_questions}>
        <FormQuestion  type="text" title="What's your name?" number="01" placeholder="Type your full name" name="name"/>
        <FormQuestion type="email" title="What's your email address?" number="02" placeholder="harrypotter@email.com" name="email"/>
        <FormQuestion  type="tel" title="What's your phone number?" number="03" placeholder="ex: 111-222-3333 or 1112223333" name="number"/>
        <FormQuestion type="text" title="What's your company/organization name?" number="04" placeholder="Type your company/organization name" name="company"/>
        <FormQuestion type="text" title="What services are you looking for?" number="05" placeholder="Choose a list from here" name="service"/>
        <FormQuestion type="text" title="Tell us about your project" number="06" placeholder="Please type your project description" name="description"/>
        <div  className={styles.button}>
        {loading && formValid? <BounceLoader color='pink'/>
        : 
        <button onClick={()=>{setLoading(true)}}  type='submit'>
            <p>SEND <br/> MESSAGE</p>
        </button>}

        </div>
        </form>
      


 

        <div className={styles.right_column}>
        <motion.span onClick={()=>{setForm(!form)}} layoutId='form' transition={{duration:2, ease:[0.5, 0.02, 0.01, 0.95]}} variants={circleContainer} animate="animate" className={styles.circle} ref={ref}><motion.svg    variants={circleAnimation} animate="animate"   width="200" height="200" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_6)"><path d="M41.965 85.232L43.491 53.84L33.027 83.488L26.923 81.09L40.439 52.532L19.511 76.076L14.715 71.28L38.259 50.352L9.701 63.868L7.303 57.764L36.951 47.3L5.559 48.826V42.286L36.951 44.03L7.303 33.348L9.701 27.462L38.259 40.978L14.715 19.832L19.511 15.254L40.439 38.58L26.923 10.24L33.027 7.624L43.491 37.49L41.965 5.88H48.505L46.761 37.272L57.443 7.624L63.329 10.24L49.813 38.58L70.959 15.254L75.537 19.832L52.211 40.978L80.551 27.462L83.167 33.348L53.301 44.03L84.911 42.286V48.826L53.301 47.3L83.167 57.764L80.551 63.868L52.211 50.352L75.537 71.28L70.959 76.076L49.813 52.532L63.329 81.09L57.443 83.488L46.761 53.84L48.505 85.232H41.965Z" fill="#FFC0CB"></path></g><defs><clipPath id="clip0_2_6"><rect width="91" height="91" fill="white"></rect></clipPath></defs></motion.svg></motion.span>
            <div className={styles.contact_info}>
            <span>For all questions and concerns: </span>
            <h3>contact@ataraxiadesign.com</h3>
           {/* <section className={styles.socials}>
            <Unicons.UilInstagram/>
            <Unicons.UilTwitter/>
            <Unicons.UilFacebook/>
           </section> */}
            </div>
        </div>
       </div>
        </motion.div>
    )
}