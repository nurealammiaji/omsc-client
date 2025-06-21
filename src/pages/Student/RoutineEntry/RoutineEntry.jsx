import React, { useContext } from 'react';
import { SelectionContext } from '../../../../providers/SelectionProvider';

const RoutineEntry = () => {
    const { selection } = useContext(SelectionContext);

    if (selection) {
        console.log(selection);
    }

    return (
        <div>

        </div>
    );
};

export default RoutineEntry;