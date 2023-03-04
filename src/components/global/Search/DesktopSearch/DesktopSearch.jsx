import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { SearchIcon } from '../../Svgs'
import styles from './styles.module.scss'



const DesktopSearch = ({width}) => {
  const [search, setSearch] = useState("");
  const router = useRouter()


  return (
    <Row className={styles["desktop_search"]}>
        <Col>
            <input 
                value={search}  
                onChange={(e) => 
                setSearch(e.target.value)} placeholder='Search on any resources design tools or Inspiration' 
                onKeyDown={e => e.code === "Enter"&&router.push(`/resources/search/${search}`)}
            />
        </Col>
        <SearchIcon className={styles["search_icon"]}/>
        <button className={styles["search_button"]} style={width&&{width}} onClick={() => router.push(`/resources/search/${search.split(" ").join("-")}`)} >
            Search
        </button>
    </Row>
  )
}

export default DesktopSearch


