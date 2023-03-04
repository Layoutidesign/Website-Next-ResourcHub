import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { 
    Container,
    Row,
    Col,
    Input
} from 'reactstrap'
import styles from './searchbar.module.scss'
const MobileSearch = ({setSearch, search}) => {
    const router = useRouter()
    const [searchData, setSearchData] = useState("");
    
    return (
        <>
            {search&& <div className={styles[`searchbar`]}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col  className="p-0 h-100 d-flex align-items-center">
                        <input
                            type='search'
                            className='h-50 border-0 shadow-none'
                            placeholder='Search on any resources design tools or Inspiration'
                            value={searchData}  
                            onChange={(e) => 
                                setSearchData(e.target.value)}
                            onKeyDown={e => e.code === "Enter"&&(router.push(`/resources/search/${searchData.split(" ").join("-")}`),setSearch(false))}
                        />
                    </Col>
                </Row>
            </Container>
        </div>}
        </>
       
    )
}

export default MobileSearch