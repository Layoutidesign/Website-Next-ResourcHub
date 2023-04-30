import React from 'react'
import style from './style.module.scss'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'


const DesignersHeader = ({designer, deisgn}) => {
    const router = useRouter()
  return (
    <div className={style['designers_header']}>
        <Container>
            <Row>
                <Col>
                    <h1><u role="button" onClick={() => router.back()}>Designer</u>  .  <span>{designer.name} {designer.DesignsCount&&`( ${designer.DesignsCount} )`}</span></h1>
                </Col>
            </Row>
            <Row> 
                <Col>
                    {deisgn&&<h2>{deisgn.title}</h2>}
                </Col>
            </Row>
            <Row>
                <Col className={style['designer_info']}>
                    <Image  
                        src={designer.image}
                        placeholder='blur'
                        blurDataURL={designer.image}
                        width={128}
                        height={128}
                        className='rounded-circle'
                    />
                    <div>
                        <h3>{designer.name}</h3>
                        <p>{designer.description}</p>
                        <div className={style['designers_cat']}>
                            {deisgn?.Categories.map((cat, i) => <span>{cat.name}</span>)}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DesignersHeader