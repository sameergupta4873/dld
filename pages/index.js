import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import img_1 from './assets/walk.gif'

export default function Home() {
  

    const [item, setItem] = useState(0);
    setTimeout(function(){
      window.location.reload();
   }, 5000);
      
  
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      setItem(localStorage.getItem('state'))
    }
  },[])

  return (
    <div className={styles.container}>
      <iframe src="https://embed.lottiefiles.com/animation/39992" height={300} width={600}/>
      <p className={styles.step}>STEPS : {item}</p>
    </div>
  )
}
