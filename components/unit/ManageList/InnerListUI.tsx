import React, { useState } from 'react'
import * as S from './ScheduleUI_style'
type Props = { data: any }

const InnerListUI = (props: Props) => {
    // useEffect로 최초 상태 데이터 요청

    const [check, setCheck] = useState(false);
    const dayWork = props.data;

    const dayWorkColor = (color: string) => {
        if (color === "red") { return <S.Color style={{ background: "#e84749" }}></S.Color> }
        if (color === "yellow") { return <S.Color style={{ background: "#FFB02E" }}></S.Color> }
        if (color === "green") { return <S.Color style={{ background: "#8fd460" }}></S.Color> }
    };

    const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked);
        // 이 후 체크할때마다 비동기 요청
    };

    return (
        <S.InnerList key={dayWork.dayWorkId} disabled={check}>
            <S.ListLeftSide>
                <S.CheckBox onChange={onChangeCheck} type="checkbox" defaultChecked={dayWork.status} />
                <S.ListText>{dayWork.title}</S.ListText>
            </S.ListLeftSide>
            <S.Color>{dayWorkColor(dayWork.color)}</S.Color>
        </S.InnerList>
    )
}

export default InnerListUI