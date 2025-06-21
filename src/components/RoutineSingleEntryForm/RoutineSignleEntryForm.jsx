import React, { useContext } from 'react'
import { SelctionContext } from '../../../providers/SelectionProvider'

const RoutineSignleEntryForm = () => {

    const { selection } = useContext(SelctionContext);

    if (selection) {
        console.log({ selection });
    }

    return (
        <div>RoutineSignleEntryForm</div>
    )
}

export default RoutineSignleEntryForm