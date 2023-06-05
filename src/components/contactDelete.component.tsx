import { contactContext } from "@/context/contact.context";
import { ModalHeader } from "./modalHeader.component";

interface DeleteContactProps {
    id: string
}

export function DeleteContactTemplate ({id}: DeleteContactProps){
    const { deleteContact } = contactContext()

    return (
        <div className="flex flex-col gap-7">
            <ModalHeader modalTitle="Deleção do contato"/>
            <p>Deseja realmente deletar o contato? <span className="text-red-500">Essa ação é irreversível!</span></p>
            <div className="flex justify-between gap-5">
                <button className="border border-red-500 bg-red-300 rounded p-2 w-[100%]" onClick={() => deleteContact(id)}>Confirmar</button>
                <button className="border border-gray-500 bg-gray-300 rounded p-2 w-[100%]">Retornar</button>
            </div>
        </div>
    )
}