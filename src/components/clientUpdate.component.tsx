import { clientContext } from "@/context/client.context";
import { ModalHeader } from "./modalHeader.component";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientReturnData, clientReturnSchema } from "@/schema/client.schema";
import { useForm } from "react-hook-form";


export function ClientUpdateForm (){
    const { updateClient } = clientContext()

    const { register, handleSubmit } = useForm<ClientReturnData>({
        resolver: zodResolver(clientReturnSchema)
    });
    
    async function submitUpdate (data: any){
        updateClient(data)
    }

    return (
        <div className="flex flex-col gap-6">
            <ModalHeader modalTitle="Editar usuário"/>
            <form onSubmit={handleSubmit(submitUpdate)} className="w-fit lg:w-4/5 mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Nome completo</label>
                    <input type="text" placeholder="Digite seu email" {...register("full_name")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Digite sua senha" {...register("email")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Digite sua senha" {...register("phone")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
                </div>

                <button type="submit" className="h-12 py-2 px-1 border-blue-500 bg-blue-200 border rounded-md">Editar</button>
            </form>
        </div>
    )
}