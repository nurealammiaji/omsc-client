import React, { createContext, useState } from 'react'

export const SelctionContext = createContext();

const SelectionProvider = ({ children }) => {

    const [selection, setSelection] = useState();

    const selectionInfo = {
        selection,
        setSelection,
    };

    return (
        <SelctionContext.Provider value={selectionInfo}>
            {children}
        </SelctionContext.Provider>
    )
}

export default SelectionProvider