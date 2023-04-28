import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import { Col, Row } from 'reactstrap'


const SocialPostsCard = ({data}) => {
  return (
    <div className={style['post']}>
        <Image src={data.Images[0].image} width={380} height={380}/>
        <Row className={style['person_container']}>
          <Col md={6}  className='d-flex align-items-center gap-3'>
              <Image 
                className={"rounded-circle"} 
                src={data.Designer.image} 
                width={35} 
                height={35} 
                placeholder="blur"
                blurDataURL={data.Designer.image}
              />
              <p className='m-0 text-white'>{data.Designer.name}</p>
          </Col>
          <Col md={6} className='text-end d-flex align-items-center justify-content-end text-white '>
            <p className='m-0'>Category Name</p>
          </Col>
        </Row>
    </div>
  )
}

export default SocialPostsCard