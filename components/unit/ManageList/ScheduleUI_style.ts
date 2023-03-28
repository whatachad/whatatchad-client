import styled from "styled-components";

export const ScheduleBox = styled.li`
    background: #333333;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    gap: 20px;
    @media (max-width: 1024px ) {
        flex-direction: column;
    }
`

export const AccountSection = styled.section`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    flex: 2;
`

export const ScheduleHeader = styled.h2`
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    p{ 
        font-size: 13px;
        font-weight: 400;
    }
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
    height: 30px;
    display: flex;
    justify-content: center;
    padding-right: 15px;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: 0.2s all ease;
    svg{
        width: 15px;
        height: 15px;
    }
    :hover{
        background: #666666;
    }
`

export const ListLabel = styled.label`
    font-size: 15px;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const InnerListBox = styled.ul`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export const InnerList = styled.li<{disabled:boolean}>`
    opacity: ${props=>props.disabled?"0.3":"default"};
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #4D4D4D;
    border-radius: 10px;
    padding: 0px 20px;
    justify-content: space-between;
    transition: 0.2s all ease;    
    overflow: hidden;
    :hover{
        background: #666666;
    }
`

export const CheckBox = styled.input`
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    appearance: none;
    cursor: pointer;
    transition: 0.1s all ease;
    
    &:checked {
        background: #8fd460;
    }
`

export const ListLeftSide = styled.span`
    label{
        cursor: pointer;
    }
    display: flex;
    gap: 15px;
    align-items: center;
    
`

export const ListRightSide = styled.span`
    display: flex;
    gap: 15px;
    align-items: center;    
`

export const Color = styled.div`
    width: 8px;
    border-radius: 4px;
    height: 24px;
`

export const ListText = styled.p`
    font-size: 15px;
    
`

export const CostText = styled.p<{type:string}>`
    font-size: 15px;
    font-weight: 700;
    min-width: 70px;
    text-align: end;
`

export const ListSubText = styled.p`
    font-size: 11px;
    
`