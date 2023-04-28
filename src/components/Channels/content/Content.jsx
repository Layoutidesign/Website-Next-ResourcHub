import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import { LoadMoreBtn } from '@/components/Posts/styles'

const Content = ({data}) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(true)

  const router = useRouter() 

  useEffect(() => {
    setItems(data)
    setPage(2)
    data.length < 25&&setNext(false)
  }, [data])

  let getData = () => {
    axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/channels?page=${page}`)
    .then((res) => {
      setItems(data => data.concat(res.data.data.Channels))
      setPage(page => page+1)
      !res.data.data.pagination.nexrPage&&setNext(false)
    })
  }

  return (
    <>
      <Container className={styles['channel']}>
          {items?.map((item, i) => <div onClick={() => item.profileImage&&router.push(`/channels/${item.name.split(" ").join('-').toLowerCase()}`)} key={i} className={styles['channel_author']}>
              <Image src={item.profileImage||item.image} width={"200"} height={"200"} className='rounded-circle'/>
              <h3 className='text-center mt-3'>{item.name}</h3>
              <p className=' text-center'>{item.subscribers} Subscribers</p>
          </div>)}       
      </Container>
      <Row className='mb-5 '>
          <Col className='d-flex justify-content-center'>
            {next?<LoadMoreBtn onClick={getData}>
              Load More
            </LoadMoreBtn>: <p className='text-white'>You Have reached The End Of The List!</p>}
          </Col>
      </Row>
    </>
  )
}

export default Content