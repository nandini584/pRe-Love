import React from 'react'
import styles from '../styles/general.module.css'
function Hero() {
  return (
    <div className='flex flex-row hero_section justify-center '>
        <div className='my-8'>

        <img src={require('../Images/Frame 13.png')} alt="" className={styles.hero}/>
        <img src={require('../Images/Frame 9.png')} alt="" className={styles.hero}/>
        <img src={require('../Images/Frame 15.png')} alt="" className={styles.hero} />
        </div>
        <div className=''>
        <img src={require('../Images/Frame 5.png')} alt="" className={styles.hero}/>
        <img src={require('../Images/Frame 10.png')} alt="" className={styles.hero}/>

        </div>
        <div className='mt-12'>

        <img src={require('../Images/Frame 8.png')} alt="" className={styles.hero}/>
        <img src={require('../Images/Frame 11.png')} alt="" className={styles.hero}/>
        </div>
    </div>
  )
}

export default Hero