import { modalContext } from "@/context/modal.context"

interface ModalHeaderProps {
    modalTitle: string
}

export function ModalHeader ({ modalTitle }: ModalHeaderProps){
    const { modalContent, setModalContent } = modalContext()

    return (
        <>
            <header className="flex justify-between">
                <h1>{modalTitle}</h1>
                <button className="border border-grey-600 bg-grey-300 rounded px-2" onClick={() => setModalContent(false)}>X</button>
            </header>
        </>
    )
}