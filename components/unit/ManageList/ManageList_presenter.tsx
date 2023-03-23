import * as S from './ManageList_styles'
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import PageTitle from '@/components/common/Page/PageTitle';
import { PageContainer, PageContentsBox, PageDesc } from '@/components/common/Page/Page';
import { Dispatch, SetStateAction } from 'react';
import AddDayWorkForm from './AddDayWorkForm';
import AddAccountForm from './AddAccountForm';

type Props = {
    addAccountIsOpen: boolean;
    setAddAccountIsOpen: Dispatch<SetStateAction<boolean>>;
    addDayWorkIsOpen: boolean;
    setAddDayWorkIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ManageList_presenter = (props: Props) => {
    // 이 아래 UI를 구현합니다.
    return (<PageContainer>
        <PageTitle title='Manage' location='청주시 흥덕구 복대동' />
        <PageDesc>월별내역</PageDesc>
        <PageContentsBox>
            <S.AccountSection>
                <S.SectionHeader>
                    <S.ListLabel>
                        <MdAccountBalanceWallet /> 가계부
                    </S.ListLabel>
                </S.SectionHeader>
                <S.ListBox>
                    {!props.addAccountIsOpen && <S.ListAddButton
                        onClick={() => {
                            props.setAddAccountIsOpen(prev => !prev)
                        }}><IoMdAddCircle /> 추가</S.ListAddButton>}
                    {props.addAccountIsOpen && <AddAccountForm
                        setAddAccountIsOpen={props.setAddAccountIsOpen}
                    />}
                    <S.List>
                        <p>제목</p>
                        <p>시간</p>
                    </S.List>
                    <S.List>
                        <p>제목</p>
                        <p>시간</p>
                    </S.List>
                </S.ListBox>
            </S.AccountSection>
            <S.DayWorkSection>
                <S.SectionHeader>
                    <S.ListLabel>
                        <RiTodoFill />할 일
                    </S.ListLabel>
                </S.SectionHeader>
                <S.ListBox>
                    {!props.addDayWorkIsOpen && <S.ListAddButton
                        onClick={() => {
                            props.setAddDayWorkIsOpen(prev => !prev)
                        }}><IoMdAddCircle /> 추가</S.ListAddButton>}

                    {props.addDayWorkIsOpen && <AddDayWorkForm
                        setAddDayWorkIsOpen={props.setAddDayWorkIsOpen}
                    />}
                    <S.List>
                        <p>제목</p>
                        <p>시간</p>
                    </S.List>
                    <S.List>
                        <p>제목</p>
                        <p>시간</p>
                    </S.List>
                    <S.List>
                        <p>제목</p>
                        <p>시간</p>
                    </S.List>
                    <S.List>
                        <p>제목</p>
                        <p>시간</p>
                    </S.List>
                </S.ListBox>
            </S.DayWorkSection>
        </PageContentsBox>
    </PageContainer>)
}

export default ManageList_presenter