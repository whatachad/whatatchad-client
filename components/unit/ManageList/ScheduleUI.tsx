import React, { useState } from 'react'
import * as S from './ScheduleUI_style'
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import AddAccountForm from '../ManageAddForm/AddAccountForm';
import AddDayWorkForm from '../ManageAddForm/AddDayWorkForm';
import { ScheduleType } from './ScheduleUI_type';
import InnerListUI from './InnerListUI';

const allAccountsData = [ // 비동기 통신 결과 예시
    {
        "accountId": "1",
        "scheduleId": "1",
        "userId": "1",
        "title": "식료품 구매",
        "category": "식비",
        "cost": 10000,
        "type": "spend",
        "year": "2023",
        "month": "03",
        "day": "23",
        "time": "22:20"
    },
    {
        "accountId": "2",
        "scheduleId": "1",
        "userId": 1,
        "title": "세뱃돈",
        "category": "용돈",
        "cost": 1000,
        "type": "income",
        "year": "2023",
        "month": "03",
        "day": "23",
        "time": "06:21"
    },
]

const alldayworksData = [ // 비동기 통신 결과 예시 
    {
        "dayWorkId": "1",
        "scheduleId": "1",
        "userId": "1",
        "title": "런닝 3km",
        "status": true,
        "color": "red",
        "year": "2023",
        "month": "03",
        "day": "23",
    },
    {
        "dayWorkId": "2",
        "scheduleId": "1",
        "userId": "1",
        "title": "장보기",
        "status": false,
        "color": "green",
        "year": "2023",
        "month": "03",
        "day": "23",
    },
    {
        "dayWorkId": "3",
        "scheduleId": "1",
        "userId": "1",
        "title": "세차",
        "status": false,
        "color": "yellow",
        "year": "2023",
        "month": "03",
        "day": "23",
    },
]

const ScheduleUI = ({ Schedule }: ScheduleType) => {
    const [addAccountIsOpen, setAddAccountIsOpen] = useState(false);
    const [addDayWorkIsOpen, setAddDayWorkIsOpen] = useState(false);

    const onchangeCheckbox = () => {
    }

    return (
        <S.ScheduleBox key={Schedule.scheduleId}>
            <S.ScheduleHeader>
                <p>{`${Schedule.year}. ${Schedule.month}`}</p>
                {Schedule.day}
                <p>총 수입</p>
                <p>{Schedule.totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

                <p>총 지출</p>
                <p>{Schedule.totalSpend.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                {/* 
                <p>오늘 지출(예산-총지출)</p>
                <p>{(Schedule.totalIncome - Schedule.totalSpend).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> */}
                <p>{Schedule.status}</p>
            </S.ScheduleHeader>

            <S.AccountSection>
                <S.SectionHeader>
                    <S.ListLabel>
                        <MdAccountBalanceWallet /> 가계부
                    </S.ListLabel>
                </S.SectionHeader>
                <S.InnerListBox>
                    {!addAccountIsOpen && <S.ListAddButton
                        onClick={() => {
                            setAddAccountIsOpen(prev => !prev)
                        }}><IoMdAddCircle /> 추가</S.ListAddButton>}
                    {addAccountIsOpen && <AddAccountForm
                        setAddAccountIsOpen={setAddAccountIsOpen}
                    />}
                    {allAccountsData.map(account => {
                        return (
                            <S.InnerList disabled={false} key={account.accountId}>
                                <S.ListLeftSide>
                                    <S.ListSubText>
                                        {`${account.month}-${account.day} │ ${account.time}`}
                                    </S.ListSubText>
                                    <S.ListText>{account.title}</S.ListText>
                                </S.ListLeftSide>
                                <S.ListRightSide>
                                    <S.ListSubText>{account.type === "income" ? "수입" : "지출"}</S.ListSubText>
                                    <S.CostText type={account.type}>{account.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</S.CostText>
                                </S.ListRightSide>
                            </S.InnerList>
                        )
                    })}
                </S.InnerListBox>
            </S.AccountSection>

            <S.DayWorkSection>
                <S.SectionHeader>
                    <S.ListLabel>
                        <RiTodoFill />할 일
                    </S.ListLabel>
                </S.SectionHeader>
                <S.InnerListBox>
                    {!addDayWorkIsOpen && <S.ListAddButton
                        onClick={() => {
                            setAddDayWorkIsOpen(prev => !prev)
                        }}><IoMdAddCircle /> 추가</S.ListAddButton>}
                    {addDayWorkIsOpen && <AddDayWorkForm
                        setAddDayWorkIsOpen={setAddDayWorkIsOpen}
                    />}

                    {alldayworksData.map(dayWork =>
                        <InnerListUI key={dayWork.dayWorkId} data={dayWork} />
                    )}
                </S.InnerListBox>
            </S.DayWorkSection>
        </S.ScheduleBox>
    )
}

export default ScheduleUI