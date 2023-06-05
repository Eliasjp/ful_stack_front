import { modalContext } from "@/context/modal.context"
import { ReactNode } from "react"

interface ModalContentProps {
    content: ReactNode
}

export function modalContentTemplate ({ content }: ModalContentProps){
    return (
        <>
            {content}
        </>
    )
}