import styled from "styled-components";

export const AccountSection = styled.section`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    flex: 2;
`

export const DayWorkSection = styled.section`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    flex: 1;
`
export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ListAddButton = styled.button`
    cursor: pointer;
    background: inherit;
    color: #fff;
    border: 2px solid #666666;
    border-radius: 10px;
    height: 60px;
    display: flex;
    justify-content: center;
    padding-right: 15px;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: 0.2s all ease;
    svg{
        width: 20px;
        height: 20px;
    }
    :hover{
        background: #666666;
    }
`

export const ListLabel = styled.label`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const ListBox = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export const List = styled.div`
    cursor: pointer;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #4D4D4D;
    border-radius: 10px;
    padding: 0px 20px;
    justify-content: space-between;
    p{
        font-size: 13px;
    }
    transition: 0.2s all ease;
    :hover{
        background: #666666;
    }
`