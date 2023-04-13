import React from 'react'
import { Container, Row } from 'reactstrap'
import { Tab } from '../Styles'
import { useRouter } from 'next/router'

const NewsTabs = ({data, category}) => {
    const router = useRouter() 
  return (
    <Container>
        <Row className='gap-3 mb-5'>
            <Tab className={category == "all"&&"active"} color='#26E71E' onClick={() => router.push('/news/all')}>All</Tab>
            {data?.map((item, i) => <Tab key={i} onClick={() => router.push(`/news/${item.name.split(' ').join('-').toLowerCase()}`)} className={category == item.name.toLowerCase()&&"active"} color={item.color}>{item.name}</Tab>)}
        </Row>
    </Container>
  )
}

export default NewsTabs