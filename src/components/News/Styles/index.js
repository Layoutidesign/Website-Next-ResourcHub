import styled from "styled-components";

export const Tab = styled.button`
    width: fit-content;
    height: 45px;   
    background: #192B49;
    border: 1px solid #344156;
    border-radius: 65px;
    padding: 0 30px;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 37px;
    transition: all 0.2s linear;
    &.active {
        background: ${props => props.color};
        border: 1px solid #344156;
        font-weight: 700;
        font-size: 20px;
        line-height: 37px;
        text-align: center;
        color: #00122F;
    }
`


export const NewsCards = styled.a`
    text-decoration: none;
    display: block;
    width: 100%;
    /* height: 100px; */
    background: #192B49;
    border: 1px solid #344156;
    border-radius: 15px;
    color: #fff;
    margin-bottom: 20px;
    padding: 20px 30px;
    transition: all 0.2s linear;
    cursor: pointer;
    position: relative;
    svg {
        path {
            transition: all 0.2s linear;
        }
    }
    .arrow {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        margin: 0;
    }
    p {
        margin: 0;
    }
    &:hover {
        border: 1px solid ${props => props.color};
        color: #fff;
        svg {
            path {
                fill: ${props => props.color};
            }
        }
    }
`