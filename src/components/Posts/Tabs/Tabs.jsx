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
             {type == 1&&<Col md={4} xs={12} className={style["tab_container"]}>
                    <span >
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.535254 0.745899C0.827453 0.447839 1.2847 0.420743 1.6069 0.66461L1.69922 0.745899L8.29419 7.47342L14.8892 0.745899C15.1814 0.44784 15.6386 0.420743 15.9608 0.66461L16.0531 0.745899C16.3453 1.04396 16.3719 1.51037 16.1328 1.83904L16.0531 1.93321L8.87617 9.2541C8.58397 9.55216 8.12673 9.57926 7.80452 9.33539L7.71221 9.2541L0.535253 1.9332C0.213835 1.60534 0.213835 1.07376 0.535254 0.745899Z" fill="white"/>
                        </svg>
                    </span>
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