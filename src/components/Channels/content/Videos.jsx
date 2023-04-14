import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './styles.module.scss'
import { VideoCard } from '../../News/Styles/index'

const Videos = ({channel, videos, color}) => {
  return (
    <div className={styles['video_content']}>
        <Container className='p-0 '>
            <Row>
                <Col>
                    <h3 ><u>{channel.name}</u> . <span>Videos ({channel.Vedios})</span></h3>
                </Col>
            </Row>
            <Row>
               {videos?.map((item,i) => <Col md={4} key={i}>
                    <VideoCard href={item.link} target='_blank'>
                        <Image       placeholder="blur" blurDataURL={`https://img.youtube.com/vi/${item.link.split("=")[1]}/0.jpg`}
                         src={`https://img.youtube.com/vi/${item.link.split("=")[1]}/0.jpg`} width={379.83} height={250}/>
                        <p>
                            {item.title}
                        </p>
                   </VideoCard>
                </Col>)} 
            </Row>
        </Container>
    </div>
  )
}

export default Videos