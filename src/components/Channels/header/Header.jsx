import React from 'react'
import styles from './style.module.scss'
const Header = ({title, desc}) => {
  return (
    <div className={styles['channel_header']}>
        <div className={styles['channel_header_content']}>
            <h1>{title||"Uncover channels that are highly helpful for UI/UX designers"}</h1>
            <p>{desc||"Each week, we add more channels to the ResourcHub, creating a growing library for the design community"}</p>
        </div>
    </div>
  )
}

export default Header