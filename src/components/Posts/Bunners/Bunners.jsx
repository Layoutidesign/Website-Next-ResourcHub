import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import { Col, Container, Row } from 'reactstrap'


const Bunners = ({data}) => {

  return (
    <div className={style['bunner']}>
      <Container>
        <Row>
            {data.map(image =>  <Col md={6} xs={12}>
            <a href={image.link} target='_blank'>
                <Image 
                    src={image.image} 
                    placeholder="blur" 
                    blurDataURL={image.image}  
                    fill 
                    role='button'

                  />
            </a>
                </Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default Bunners