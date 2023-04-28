import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './styles.module.scss'
import { VideoCard } from '../../News/Styles/index'
import axios from 'axios'
import { LoadMoreBtn } from '@/components/Posts/styles'

const Videos = ({channel, videos, color}) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [next, setNext] = useState(false)


    useEffect(() => {
        setItems(videos)
        setPage(2)
        videos.length >= 15&&setNext(true)
    }, [videos])


    let getData = () => {
        axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/channels/vedios?channel=${channel.name}&page=${page}`)
        .then((res) => {
          setItems(data => data.concat(res.data.data.Vedios))
          setPage(page => page+1)
          !res.data.data.pagination.nexrPage&&setNext(false)
        })
      }

  return (
    <div className={styles['video_content']}>
        <Container className='p-0 '>
            <Row>
                <Col>
                    <h3 ><u>{channel.name}</u> . <span>Videos ({channel.Vedios})</span></h3>
                </Col>
            </Row>
            <Row>
               {items?.map((item,i) => <Col md={4} key={i}>
                    <VideoCard href={item.link} target='_blank'>
                        <Image       placeholder="blur" blurDataURL={`https://img.youtube.com/vi/${item.link.split("=")[1]}/0.jpg`}
                         src={`https://img.youtube.com/vi/${item.link.split("=")[1]}/0.jpg`} width={379.83} height={250}/>
                        <p>
                            {item.title}
                        </p>
                   </VideoCard>
                </Col>)} 
            </Row>
            <Row className='mb-5 '>
          <Col className='d-flex justify-content-center'>
            {next?<LoadMoreBtn onClick={getData}>
              Load More
            </LoadMoreBtn>: <p className='text-white mt-4'>You Have reached The End Of The List!</p>}
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Videos