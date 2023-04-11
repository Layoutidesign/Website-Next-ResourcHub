import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HeartIcon, HeartNewIcon, LogoutIcon } from '../Svgs'
import Login from './Login'
import styles from './style.module.scss'
const User = ({whiteActive, session, signIn,signOut, active, setActive,  count}) => {
    const router = useRouter()
  return (
    <>
      {!session&&<Login whiteActive={whiteActive} signIn={signIn}/>}
      {session&&<div className={styles['useProfile']} onClick={() => setActive(!active)}>
       {count!==0&&<span>{count}</span>}
        <Image  src={session.user.image} width={30} height={30} className='rounded-circle'/>
        <p style={whiteActive?{color: "#fff"}:{color: "#000"}} >{session.user.name.split(" ")[0]}</p>
        {active&&<div className={styles['dropdown']}>
          <button onClick={() => router.push('/resources/favourite')} className={count!==0&&styles['dot']}><HeartNewIcon /> Favourite </button>
          <button onClick={() => signOut()}><LogoutIcon /> Logout</button>
        </div>}
      </div>
      }
    </>
  )
}

export default User