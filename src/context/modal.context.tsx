import { ReactNode, createContext, useContext, useState } from "react";


const ModalContext = createContext<ModalSchema>({} as ModalSchema)

interface Props {
    children: ReactNode
}

interface ModalSchema {
    modalContent: any
    setModalContent: (set: any ) => void
}

export function ModalProvider ({children}: Props){
    const [modalContent, setModalContent] = useState(false)

    return (
        <ModalContext.Provider value={{modalContent, setModalContent}}>
            {children}
        </ModalContext.Provider>
    )
}

export const modalContext = () => useContext(ModalContext)