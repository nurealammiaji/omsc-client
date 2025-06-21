import React, { useContext } from 'react'
import { SelectionContext } from '../../../providers/SelectionProvider'

const RoutineSignleEntryForm = () => {

    const { selection } = useContext(SelectionContext);

    if (selection) {
        console.log({ selection });
    }

    return (
        <div>RoutineSignleEntryForm</div>
    )
}

export default RoutineSignleEntryForm