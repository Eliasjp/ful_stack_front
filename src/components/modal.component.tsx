import { modalContext } from "@/context/modal.context"
import { ReactNode } from "react"

export function Modal (){
    const { modalContent, setModalContent } = modalContext()

    return (
        <>
            {modalContent &&

                <div className="flex justify-center items-center w-screen min-h-screen absolute top-0 left-0 bg-black bg-opacity-50" onClick={() => setModalContent(false)}>
                    <div className="bg-white border border-white rounded-xl p-4 w-4/5">
                        {modalContent}
                    </div>
                </div>

            }

        </>
    )
}