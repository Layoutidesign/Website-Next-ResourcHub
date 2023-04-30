import React from 'react'
import  style from './style.module.scss'
import { Col, Container, Row } from 'reactstrap'
import { SocialTab } from '../styles'


const Tabs = ({type, setType, data, getDesigns, setCatName, catName}) => {
  return (
    <div className={style["social_tabs"]}>
        <Container>
            <Row>
             <Col md={8} xs={12} className={'d-flex gap-3'}>
                <SocialTab className={type == 1&&"active"}  onClick={() => setType(1)}>
                    Posts
                </SocialTab>
                <SocialTab className={type == 2&&"active"} onClick={() => setType(2)}>
                    Designer
                </SocialTab>
             </Col>
             {type == 1&&<Col md={4} xs={12} className='d-flex justify-content-end'>
                <select className={style['select']} value={catName} onChange={e => setCatName(e.target.value)}>
                    <option value={''}  selected>All</option>
                    {data.map((item, i) => <option key={i} value={item.name}>{item.name} ({item.Design})</option>)}
                </select>
             </Col>}
            </Row>
        </Container>
    </div>
  )
}

export default Tabs