import React from 'react'
import style from './style.module.scss'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { InstagramIcon } from '@/components/global/Svgs/InstagramIcon'
import Link from 'next/link'


const DesignersHeader = ({designer, deisgn}) => {
    const router = useRouter()
  return (
    <div className={style['designers_header']}>
        <Container>
            <Row>
                <Col>
                    <h1><u role="button" onClick={() => router.push('/social-posts')}>Designer</u>  .  <span>{designer.name} {(designer.DesignsCount || designer.DesignsCount == 0)&&`( ${designer.DesignsCount} )`}</span></h1>
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
                        <h3>{designer.name} - {designer.expertise}</h3>
                        <p>{designer.description}</p>
                        <div className={style['designers_social']}>
                            <div className={style['designers_cat']}>
                                {designer?.Links?designer.Links.map((cat, i) => <a href={cat?.link} target='_blank'><span className='d-flex justify-content-center align-items-center gap-2'><InstagramIcon /> Instagram</span></a>):<a href={deisgn?.link} target='_blank'><span className='d-flex justify-content-center align-items-center gap-2'><InstagramIcon /> Instagram</span></a>}
                            </div>
                            <div className={style['designers_cat']}>
                                {deisgn?.Categories.map((cat, i) => <Link href={`/social-posts?name=${cat.name.split(' ').join("-")}`}><span># {cat.name}</span></Link>)}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DesignersHeader