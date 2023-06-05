import { ModalHeader } from "./modalHeader.component";


export function ClientUpdateForm (){

    return (
        <div className="flex flex-col gap-6">
            <ModalHeader modalTitle="Editar usuário"/>
            <form action="">
                <label htmlFor="">teste</label>
                <input type="text" placeholder="teste"/>
            </form>
        </div>
    )
}