import styled from "styled-components";

export const AccountSection = styled.section`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    flex: 2;
`

export const TodoSection = styled.section`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    flex: 1;
`

export const ListLabel = styled.label`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
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
`