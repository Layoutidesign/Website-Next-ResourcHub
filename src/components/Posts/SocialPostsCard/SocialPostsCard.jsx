import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import { Col, Row } from 'reactstrap'
import { useRouter } from 'next/router'


const SocialPostsCard = ({data, designer, nodir}) => {
  const router = useRouter()
  console.log(data.Designer, designer);
  return (
    <div className={style['post']}>
        <Image 
          src={data.Images?data.Images[0].image:data.image}
          width={380} 
          height={380} 
          blurDataURL={data.Images?data.Images[0].image:data.image} 
          placeholder="blur" 
          role={data.Designer||designer?"button":""}
          onClick={() => (data.Designer||designer)&&router.push(`/social-posts/post/${data.title.split(" ").join("-").toLowerCase()}`)}
        />
        { (data.Designer||designer)&&<Row className={style['person_container']}>
          {!nodir&&<Col   className='d-flex align-items-center gap-3 cursor-pointer' role="button" onClick={() => !nodir&&router.push(`/social-posts/designer/${(data.Designer?.name||designer.name).split(" ").join("-").toLowerCase()}`)}>
              <Image 
                className={"rounded-circle"} 
                src={data.Designer?.image||designer.image} 
                placeholder="blur"
                blurDataURL={data.Designer?.image||designer.image}
                width={35} 
                height={35} 
                alt=''
              />
              <p className='m-0 text-white'>{data.Designer?.name||designer.name}</p>
          </Col>}
          {!nodir&&<Col  className='text-end d-flex align-items-center justify-content-end text-white '>
            <p className='m-0'>{data.Designer.expertise}</p>
          </Col>}
        </Row>}
    </div>
  )
}

export default SocialPostsCard