import React from 'react'
import styles from './styles.module.scss'
import { Container } from 'reactstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Content = ({data}) => {
  const router = useRouter() 
  return (
    <Container className={styles['channel']}>
        {data?.map((item, i) => <div onClick={() => router.push(`/channels/${item.name.split(" ").join('-').toLowerCase()}`)} key={i} className={styles['channel_author']}>
            <Image src={item.profileImage} width={"200"} height={"200"} className='rounded-circle'/>
            <h3 className='text-center mt-3'>{item.name}</h3>
            <p className=' text-center'>{item.subscribers} Subscribers</p>
        </div>)}
    </Container>
  )
}

export default Content