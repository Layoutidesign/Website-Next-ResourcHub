import Image from 'next/image'
import React, { useState } from 'react'
import { HeartIcon, HeartNewIcon, LogoutIcon } from '../Svgs'
import Login from './Login'
import styles from './style.module.scss'
const User = ({whiteActive, session, signIn,signOut, active, setActive}) => {
  
  return (
    <div>
      {!session&&<Login whiteActive={whiteActive} signIn={signIn}/>}
      {session&&<div className={styles['useProfile']} onClick={() => setActive(!active)}>
        <Image  src={session.user.image} width={30} height={30} className='rounded-circle'/>
        <p style={whiteActive?{color: "#fff"}:{color: "#000"}} >{session.user.name.split(" ")[0]}</p>
        {active&&<div className={styles['dropdown']}>
          <button><HeartNewIcon /> Favourite</button>
          <button onClick={() => signOut()}><LogoutIcon /> Logout</button>
        </div>}
      </div>
      }
    </div>
  )
}

export default User