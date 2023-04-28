import styled from "styled-components";


export const SocialTab = styled.button`
    width: 296px;
    height: 60px;
    background: #192B49;
    border: 1px solid #344156;
    border-radius: 65px;
    padding: 7px 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 37px;
    color: #FFFFFF;
    transition: all 0.3s linear;
    &.active {
        background: #26E71E;
        border: 1px solid #26E71E;
        font-weight: 700;
        font-size: 20px;
        line-height: 37px;
        text-align: center;
        color: #00122F;
    }
`
export const LoadMoreBtn = styled.button`
    width: 296px;
    height: 60px;
    background: #192B49;
    border: 1px solid #344156;
    border-radius: 65px;
    padding: 7px 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #FFFFFF;
    transition: all 0.3s linear;
    &:hover {
        background: #26E71E;
        border: 1px solid #26E71E;
        text-align: center;
        color: #00122F;
        font-weight: 700;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`