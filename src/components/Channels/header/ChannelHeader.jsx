import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { Col, Container, Row } from 'reactstrap'

const ChannelHeader = () => {
  return (
    <>
        <div className={styles['header_channel']}>
            <Image  src={'https://resourchub-laravel.layouti.com/media/Channels/1680180276-slideImage-Screenshot%202023-03-30%20144034.png'}  fill/>
        </div>
        <Container className={styles['channel_info']}>
            <Row className='position-relative'>
                <Col md={1}>
                    <Image  src={'https://resourchub-laravel.layouti.com/media/Channels/1680180276-profileImage-unnamed.jpg'} width={130} height={130} className='rounded-circle'/>
                </Col>
                <Col className='px-5 py-4'>
                    <p className='text-white fs-4 fw-bolder'>The Future</p>
                </Col>
                <Col className='text-end py-4'>
                    <p className='text-white fs-5 '>2.15M Subscribers</p>
                </Col>
            </Row>
            
        </Container>
    </>
  )
}

export default ChannelHeader