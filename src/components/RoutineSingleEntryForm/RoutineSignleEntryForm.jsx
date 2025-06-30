import React, { useContext } from 'react'
import { SelectionContext } from '../../../providers/SelectionProvider'

const RoutineSingleEntryForm = () => {

    const { selection } = useContext(SelectionContext);

    if (selection) {
        console.log({ selection });
    }

    return (
        <div>RoutineSingleEntryForm</div>
    )
}

export default RoutineSingleEntryForm