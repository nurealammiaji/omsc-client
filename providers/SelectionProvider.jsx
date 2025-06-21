import React, { createContext, useState } from 'react'

export const SelectionContext = createContext();

const SelectionProvider = ({ children }) => {

    const [selection, setSelection] = useState();

    const selectionInfo = {
        selection,
        setSelection,
    };

    return (
        <SelectionContext.Provider value={selectionInfo}>
            {children}
        </SelectionContext.Provider>
    )
}

export default SelectionProvider