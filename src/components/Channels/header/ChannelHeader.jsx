import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { Col, Container, Row } from 'reactstrap'

const ChannelHeader = ({channel}) => {
  return (
    <>
        <div className={styles['header_channel']}>
            <Image  src={channel?.slideImage}  fill/>
        </div>
        <Container className={styles['channel_info']}>
            <Row className='position-relative'>
                <Col md={1} className='p-0'>
                    <Image  
                        src={channel?.profileImage} 
                        width={130} 
                        height={130} 
                        blurDataURL={channel?.profileImage} 
                        className='rounded-circle'
                        placeholder='blur'
                    />
                </Col>
                <Col className='px-5 py-4'>
                    <h3 className='text-white fs-4 fw-bolder'>{channel.name}</h3>
                </Col>
                <Col className='text-end py-4'>
                    <p className={styles['text_sub']}>{channel.subscribers} Subscribers</p>
                </Col>
            </Row>
            
        </Container>
    </>
  )
}

export default ChannelHeader