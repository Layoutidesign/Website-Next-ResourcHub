import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { NewsCards } from '../Styles'
import { Arrow } from '@/components/global/Svgs'
import InnerPageCard from '@/components/global/Cards/InnerPageCard/InnerPageCard'
import UiUxResourcesServices from '@/services/uiUxResources.services'
import styles from './style.module.scss'
import { LoadMoreBtn, SocialTab } from '@/components/Posts/styles'
import axios from 'axios'

const Content = ({data, color, latest,session,setShowSignPopup,category}) => {

  const [items, setItems] = useState([])
  const [page, setPage] = useState(2);
  const [next, setNext] = useState(true)


  const handleLike = (id) => {
    if (!session) {
      setShowSignPopup(true)
      return;
    }
    UiUxResourcesServices.likeResource({id, token: session.user.accessToken})
  };

  useEffect(() => {
    setItems(data)
    data.length >= 12&&setNext(true)
    setPage(2)
  }, [data])

  let getData = () => {
    axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/blogs?category=${category=="all"?"":category}&page=${page}`)
    .then(res => {
      setItems(data => data.concat(res.data.data.Blogs))
      setPage(page => page+1)
      !res.data.data.pagination.nexrPage&&setNext(false)
    })
  }


  return (
    <Container style={{paddingBottom: "100px"}}>
        <Row >
          <Col md={9} xs={12} className={styles['card_link']} >
            {items?.map((item,i) => <NewsCards href={item.link} target='_blank' color={color} key={i}>
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <Arrow className="arrow d-md-block d-none"/>
            </NewsCards>)}
            <Row className='mt-5'>
            <Col>
              {next?<LoadMoreBtn onClick={getData}>
                Load More
              </LoadMoreBtn>:<p className='text-white '>You Have Reached The End Of The List!</p>}
            </Col>
          </Row>
          </Col>
          <Col md={3} className='d-md-block d-none'>
            <h2 className='text-white mb-3'>Latest Resources</h2>
              {latest.map((item, i)=> <div key={i} className='mb-4'><InnerPageCard handleLike={handleLike} innerPage={item}/></div>)}
          </Col>
        </Row>
        
    </Container>
  )
}

export default Content