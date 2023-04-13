import React from 'react'
import styles from './styles.module.scss'
import { Container } from 'reactstrap'
import Image from 'next/image'

const Content = ({data}) => {
  return (
    <Container className={styles['channel']}>
        {data?.map((item, i) => <div key={i} className={styles['channel_author']}>
            <Image src={item.profileImage} width={"200"} height={"200"} className='rounded-circle'/>
            <h3 className='text-white text-center mt-3'>{item.name}</h3>
            <p className='text-white text-center'>{item.subscribers} Subscribers</p>
        </div>)}
    </Container>
  )
}

export default Content