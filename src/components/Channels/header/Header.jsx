import React from 'react'
import styles from './style.module.scss'
const Header = () => {
  return (
    <div className={styles['channel_header']}>
        <div className={styles['channel_header_content']}>
            <h1>Find incredibly helpful design resources and tools.</h1>
            <p>Each week, more than 1000 design resources are added to a growing library for the design community.</p>
        </div>
    </div>
  )
}

export default Header