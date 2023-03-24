import React, { useState } from 'react'
import ManageList_presenter from './ManageList_presenter'

type Props = {}

const ManageList_container = (props: Props) => {
    // 여기에 로직을 담아 아래에 전달합니다.

    const [addAccountIsOpen, setAddAccountIsOpen] = useState(false);
    const [addDayWorkIsOpen, setAddDayWorkIsOpen] = useState(false);

    return (
        <ManageList_presenter
            addAccountIsOpen={addAccountIsOpen}
            setAddAccountIsOpen={setAddAccountIsOpen}
            addDayWorkIsOpen={addDayWorkIsOpen}
            setAddDayWorkIsOpen={setAddDayWorkIsOpen}
        />
    )
}

export default ManageList_container