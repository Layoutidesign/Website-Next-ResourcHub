import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { NewsCards } from '../Styles'
import { Arrow } from '@/components/global/Svgs'
import InnerPageCard from '@/components/global/Cards/InnerPageCard/InnerPageCard'
import UiUxResourcesServices from '@/services/uiUxResources.services'
import styles from './style.module.scss'

const Content = ({data, color, latest,session,setShowSignPopup}) => {
  const handleLike = (id) => {
    if (!session) {
      setShowSignPopup(true)
      return;
    }
    UiUxResourcesServices.likeResource({id, token: session.user.accessToken})
    // setData(cards => cards.map(card => card.id === id?{...card, ip: !card.ip, likes: card.ip?card.likes-1:card.likes+1}:card))
  };
  return (
    <Container style={{paddingBottom: "100px"}}>
        <Row >
          <Col md={9} xs={12} className={styles['card_link']} >
            {data?.map((item,i) => <NewsCards href={item.link} target='_blank' color={color} key={i}>
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <Arrow className="arrow d-md-block d-none"/>
            </NewsCards>)}
          </Col>
          <Col className=' d-md-block d-none'>
            <h2 className='text-white mb-3'>Latest Resources</h2>
              {latest.map((item, i)=> <div key={i} className='mb-4'><InnerPageCard handleLike={handleLike} innerPage={item}/></div>)}
          </Col>
        </Row>
    </Container>
  )
}

export default Content