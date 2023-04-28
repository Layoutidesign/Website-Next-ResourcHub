import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { Col, Container, Row } from 'reactstrap'

const ChannelHeader = ({channel}) => {
  return (
    <>
        <div className={styles['header_channel']}>
            <Image  
                src={channel?.slideImage}  
                fill
                placeholder="blur"
                blurDataURL={channel?.slideImage}  
            />
        </div>
        <Container className={styles['channel_info']}>
            <Row className='position-relative'>
                <Col md={1} xs={12} className='p-2 p-sm-0 text-center'>
                    <Image  
                        src={channel?.profileImage} 
                        width={130} 
                        height={130} 
                        className='rounded-circle'
                        placeholder='blur'
                        blurDataURL={channel?.profileImage} 
                    />
                </Col>
                <Col className={`${styles['channel_info_name']} px-5 py-4`} md={5} xs={12}>
                    <h3 className='text-white fs-4 fw-bolder'>{channel.name}</h3>
                </Col>
                <Col className={`${styles['channel_info_name']} text-end py-4`} md={6} xs={12}>
                    <p className={styles['text_sub']}>{channel.subscribers} Subscribers</p>
                </Col>
            </Row>
            
        </Container>
    </>
  )
}

export default ChannelHeader