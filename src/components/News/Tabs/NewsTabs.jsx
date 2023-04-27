import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Tab } from '../Styles'
import { useRouter } from 'next/router'
import styles from './style.module.scss'
import useWidth from '@/Hooks/useWidth'

const NewsTabs = ({data, category}) => {
    const router = useRouter()
    const size = useWidth() 
    let  all = 0
    data?.forEach(element => {
      all+=element.Blogs
    });
  return (
    <Container >
        {size>= 600?<Row className='gap-2 mb-5' >
            <Tab className={category == "all"&&"active"} color='#26E71E' onClick={() => router.push('/news/all')}>All ({all})</Tab>
            {data?.map((item, i) => <Tab key={i} onClick={() => router.push(`/news/${item.name.split(' ').join('-').toLowerCase()}`)} className={category == item.name.toLowerCase()&&"active"} color={item.color}>{item.name} ({item.Blogs})</Tab>)}
        </Row>:<Row >
          <Col>
          <select
          className={styles["select"]}
          onChange={e => router.push(`/news/${e.target.value.split(' ').join('-').toLowerCase()}`)}
          // value={activeTab}
        >
          <option value={'all'}>
                All ({all})
            </option>
          {data.map((item, i) => (
            <option key={i} value={item.name}>
              {`${item.name} (${item.Blogs})`}
            </option>
          ))}
        </select>
          </Col>
        </Row>}
    </Container>
  )
}

export default NewsTabs