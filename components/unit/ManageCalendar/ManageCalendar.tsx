import React from 'react'
import PageTitle from '@/components/common/Page/PageTitle';
import { PageContainer, PageContentsBox, PageDesc } from '@/components/common/Page/Page';

type Props = {}

const ManageCalendar = (props: Props) => {
    // 이 아래 UI를 구현합니다.
    return (<PageContainer>
        <PageTitle title='Manage' location='청주시 흥덕구 복대동' />
        <PageDesc>달력</PageDesc>
        <PageContentsBox>
            달력
        </PageContentsBox>
    </PageContainer>)
}

export default ManageCalendar