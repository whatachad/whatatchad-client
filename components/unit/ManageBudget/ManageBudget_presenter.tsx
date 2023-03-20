import React from 'react'
import PageTitle from '@/components/common/Page/PageTitle';
import { PageContainer, PageContentsBox, PageDesc } from '@/components/common/Page/Page';

type Props = {}

const ManageBudget_presenter = (props: Props) => {
    // 이 아래 UI를 구현합니다.
    return (<PageContainer>
        <PageTitle title='Manage' location='청주시 흥덕구 복대동' />
        <PageDesc>예산 설정</PageDesc>
        <PageContentsBox>
            예산 설정 내용
        </PageContentsBox>
    </PageContainer>)
}

export default ManageBudget_presenter