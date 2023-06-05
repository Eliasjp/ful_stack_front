import { zodResolver } from "@hookform/resolvers/zod";
import { ModalHeader } from "./modalHeader.component";
import { useForm } from "react-hook-form";
import { ContactOmmitedData, contactIdOmitted } from "@/schema/contact.schema";
import { contactContext } from "@/context/contact.context";


export function CreateContactTemplate (){
    const { register, handleSubmit } = useForm<ContactOmmitedData>({
        resolver: zodResolver(contactIdOmitted)
    });

    const { createContact } = contactContext()

    function submitNewContact (data: ContactOmmitedData){
        createContact(data)
    }
    
    return (
        <div>
            <ModalHeader modalTitle="Criar um Contato"/>
            <form onSubmit={handleSubmit(submitNewContact)} className="w-fit lg:w-4/5 mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Nome completo</label>
                    <input type="text" placeholder="Digite seu email" {...register("full_name")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Digite seu email" {...register("email")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Digite seu email" {...register("phone")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
                </div>

                <button type="submit" className="h-12 py-2 px-1 border-blue-500 bg-blue-200 border rounded-md">Registrar contato</button>
        </form>
        </div>
    )
}