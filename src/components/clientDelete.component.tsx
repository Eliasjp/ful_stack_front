import { clientContext } from "@/context/client.context";
import { ModalHeader } from "./modalHeader.component";
import { modalContext } from "@/context/modal.context";


export function DeleteClientTemplate (){
    const { deleteClient } = clientContext()
    const { setModalContent } = modalContext()


    return (
        <div className="flex flex-col gap-7">
            <ModalHeader modalTitle="Deleção de conta"/>
            <p>Deseja realmente deletar a conta? <span className="text-red-500">Essa ação é irreversível!</span></p>
            <div className="flex justify-between gap-5">
                <button className="border border-red-500 bg-red-300 rounded p-2 w-[100%]" onClick={() => deleteClient()}>Confirmar</button>
                <button className="border border-gray-500 bg-gray-300 rounded p-2 w-[100%]" onClick={() => setModalContent(false)}>Retornar</button>
            </div>
        </div>
    )
}