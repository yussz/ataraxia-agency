'use client';
import styles from './Services.module.css'
import * as Unicons from '@iconscout/react-unicons'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useEffect, useRef,useState } from 'react';


export const metadata = {  
  title: "Ataraxia's services",
  description: 'We offer premium web design & development, digital marketing, and branding.',
  keywords: ['web design','web development','digital marketing','branding']
}

const rowAnimation = {
  initial: {
    x:-200,
    opacity:0
  },
  animate: {
    x:0,
    opacity:1,
    transition: {
      duration:0.5,
    },
    
  },
  exit: {
    x:-200,
    opacity:0,
    transition: {
      duration:0.5
    }
  }

}

export default function Services() {


const ServiceRow = (props) => {

  const [dropDown,setDropDown] = useState(false)
  const plusAnimation = {
   
    animate: {
      rotate:dropDown ? 45: 0,
      transition: {
        duration:0.5,
   
      }
    }
  }
  return (
    <div  className={styles.service_row}>
      <span style={{color:'pink'}}>{props.number}</span>
   
      <h1>{props.title}</h1>
   
      <motion.span style={{cursor:'pointer'}} variants={plusAnimation} initial="initial" animate="animate"  onClick={()=>setDropDown(!dropDown)}><Unicons.UilPlus color='pink' size='50'/></motion.span>
        <AnimatePresence>
        {dropDown ? 
        <motion.div variants={rowAnimation} initial="initial" animate="animate" exit="exit" key='dropDown'  className={styles.drop_down}>
          <h3 style={{color:'pink'}}>{props.dropTitle}</h3>
           
    
            <section className={styles.drop_row}> 
            <span><svg width="25" height="25" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_6)"><path d="M41.965 85.232L43.491 53.84L33.027 83.488L26.923 81.09L40.439 52.532L19.511 76.076L14.715 71.28L38.259 50.352L9.701 63.868L7.303 57.764L36.951 47.3L5.559 48.826V42.286L36.951 44.03L7.303 33.348L9.701 27.462L38.259 40.978L14.715 19.832L19.511 15.254L40.439 38.58L26.923 10.24L33.027 7.624L43.491 37.49L41.965 5.88H48.505L46.761 37.272L57.443 7.624L63.329 10.24L49.813 38.58L70.959 15.254L75.537 19.832L52.211 40.978L80.551 27.462L83.167 33.348L53.301 44.03L84.911 42.286V48.826L53.301 47.3L83.167 57.764L80.551 63.868L52.211 50.352L75.537 71.28L70.959 76.076L49.813 52.532L63.329 81.09L57.443 83.488L46.761 53.84L48.505 85.232H41.965Z" fill="pink"></path></g><defs><clipPath id="clip0_2_6"><rect width="91" height="91" fill="white"></rect></clipPath></defs></svg></span>
            <h3>{props.listOne}</h3>
            </section>
            
            <section className={styles.drop_row}> 
            <span><svg width="25" height="25" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.o1g/2000/svg"><g clip-path="url(#clip0_2_6)"><path d="M41.965 85.232L43.491 53.84L33.027 83.488L26.923 81.09L40.439 52.532L19.511 76.076L14.715 71.28L38.259 50.352L9.701 63.868L7.303 57.764L36.951 47.3L5.559 48.826V42.286L36.951 44.03L7.303 33.348L9.701 27.462L38.259 40.978L14.715 19.832L19.511 15.254L40.439 38.58L26.923 10.24L33.027 7.624L43.491 37.49L41.965 5.88H48.505L46.761 37.272L57.443 7.624L63.329 10.24L49.813 38.58L70.959 15.254L75.537 19.832L52.211 40.978L80.551 27.462L83.167 33.348L53.301 44.03L84.911 42.286V48.826L53.301 47.3L83.167 57.764L80.551 63.868L52.211 50.352L75.537 71.28L70.959 76.076L49.813 52.532L63.329 81.09L57.443 83.488L46.761 53.84L48.505 85.232H41.965Z" fill="pink"></path></g><defs><clipPath id="clip0_2_6"><rect width="91" height="91" fill="white"></rect></clipPath></defs></svg></span>
            <h3>{props.listTwo}</h3>
            </section>


     
          
        </motion.div> 
        : 
        ''}
        </AnimatePresence>
    </div>
  )
}


 
        return (
          <motion.div id='services' className={styles.services}>
          <p style={{placeSelf:'center',color:'pink',fontSize:'1.5rem'}}>(002) expertise</p>
            <ServiceRow number='(01)' title='Web Development & Design' dropTitle='these are paragraphs about content' listOne='Our web design agency offers a top-notch web development and design service tailored to meet the specific requirements of our clients. Our experienced team of professionals excels in crafting visually appealing websites that are both functional and user-friendly.' listTwo='We utilize cutting-edge technologies and industry best practices to ensure seamless performance across various platforms and devices. Our holistic approach encompasses everything from wireframing and prototyping to front-end and back-end development, resulting in robust and scalable websites. '/>
            <ServiceRow number='(02)' title='Branding' dropTitle='these are paragraphs about content' listOne=' Our team of branding experts collaborates closely with clients to understand their values, goals, and target audience, enabling us to develop a unique and compelling brand strategy. From logo design and color palette selection to typography and brand guidelines, we craft a cohesive visual identity that resonates with the essence of the business. ' listTwo='Moreover, our branding service extends beyond visuals, encompassing messaging, tone of voice, and brand positioning to create a consistent and memorable brand experience.'/>
            <ServiceRow number='(03)' title='Digital Marketing' dropTitle='these are paragraphs about content' listOne='From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we deploy effective tactics to increase brand awareness, drive targeted traffic, and generate leads.' listTwo='Through data analysis and continuous optimization, we strive to deliver measurable ROI and help our clients achieve their marketing objectives.'/>
          
          </motion.div>

         
        )
      }
 