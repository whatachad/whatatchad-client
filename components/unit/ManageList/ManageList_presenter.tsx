import React from 'react'
import * as S from './ManageList_styles'
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import PageTitle from '@/components/common/Page/PageTitle';
import { PageContainer, PageContentsBox, PageDesc } from '@/components/common/Page/Page';

type Props = {}

const ManageList_presenter = (props: Props) => {
    // 이 아래 UI를 구현합니다.
    return (<PageContainer>
        <PageTitle title='Manage' location='청주시 흥덕구 복대동' />
        <PageDesc>월별내역</PageDesc>
        <PageContentsBox>
            <S.AccountSection>
                <S.ListLabel>
                    <MdAccountBalanceWallet /> 가계부
                </S.ListLabel>
                <S.ListBox>
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
            <S.TodoSection>
                <S.ListLabel>
                    <RiTodoFill />TO-DO
                </S.ListLabel>
                <S.ListBox>
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
            </S.TodoSection>
        </PageContentsBox>
    </PageContainer>)
}

export default ManageList_presenter