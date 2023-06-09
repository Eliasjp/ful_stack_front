import { modalContext } from "@/context/modal.context"
import { ReactNode } from "react"

export function Modal (){
    const { modalContent, setModalContent } = modalContext()

    return (
        <>
            {modalContent &&

                <div className="flex justify-center items-center w-screen min-h-screen fixed top-0 left-0 bg-black bg-opacity-50">
                    <div className="bg-white border border-white rounded-xl p-4 w-4/5 z-1">
                        {modalContent}
                    </div>
                </div>

            }

        </>
    )
}