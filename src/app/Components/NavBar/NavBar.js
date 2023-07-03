'use client';
import styles from './NavBar.module.css'
import * as Unicons from '@iconscout/react-unicons'
import { useState,useEffect,useRef  } from 'react';
import {AnimatePresence, motion,useInView } from 'framer-motion'
import Link from 'next/link';
export default function NavBar() {
    const [menu,setMenu] = useState(false)

  
    const menuContainer = {
        initial: {
            x:1000
        },
        animate: {
            x:0,
            transition: {
                staggerChildren:0.1,
                type:'tween',
                when:'beforeChildren',
                duration:0.5
                
            }
        },
        exit: {
            x:1000,
            transition: {
                staggerChildren:0.1,
                type:'tween',
                duration:0.5
                
            }
        }
    }
    const menuItem = {
        initial: {
            x:800
        },
        animate: {
            x:0,
            
        },
        exit: {
            x:800      
        },
        transition: {
            ease:[0.17, 0.67, 0.83, 0.67],
         
            // duration:0.5
        }
    }
const MenuItem= ({number,title}) => {
    return <motion.div onClick={()=>{setMenu(!menu)}}  className={styles.menu_item} variants={menuItem} key="menu_item">
    <p>{number}</p>
    <h3>{title}</h3>
    
    </motion.div>
}

    const Menu = () => {
        const menuRef = useRef(null)
        const isInView = useInView(menuRef,{once:false})

        useEffect(() => {
            isInView? document.body.style.overflowY="hidden" : document.body.style.overflowY="auto"
        }, [isInView]);

        return (
            <motion.div  ref={menuRef} variants={menuContainer} initial="initial" animate="animate" exit="exit" key="menu" className={styles.menu}>
                <div className={styles.content}>
              
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem'}}>
             
                  <span className={styles.icon} onClick={()=> {setMenu(!menu)}}><Unicons.UilX size='80'/></span>
                  {/* <h1>ataraxia</h1> */}
              </div>
                
              
                    <div className={styles.flex_col}>
                    <Link href='#about'><MenuItem number={"(002)"} title={"about"}/></Link>
                   <Link href='#services'><MenuItem number={"(003)"} title={"services"}/></Link>
                    <Link href='#contact'><MenuItem number={"(003)"} title={"contact"}/></Link>
                 
                    </div>
                    <div className={styles.socials}>
                        <h3>contact@ataraxiadesign.com</h3>
                    </div>
                </div>

                
            </motion.div>
        )
    }


    return (
        <>
        <div className={styles.nav}>
            <nav className={styles.links}>
            <h3>ataraxia</h3>

            <div className={styles.right_links}>
            <span className={styles.icon} onClick={()=>{setMenu(!menu)}}><Unicons.UilBars color='white' size='50'/></span>
            </div>
            </nav>
        </div>
           <AnimatePresence mode='wait'>
             {menu? <Menu/>: ''}
           </AnimatePresence>
        </>
        
    )
}