import { zodResolver } from "@hookform/resolvers/zod";
import { ModalHeader } from "./modalHeader.component";
import { ContactData, contactSchema } from "@/schema/contact.schema";
import { useForm } from "react-hook-form";
import { contactContext } from "@/context/contact.context";


export function UpdateContactTemplate ({id, full_name, email, phone}: ContactData){
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(contactSchema)
    });

    const { updateContact } = contactContext()

    function updateRegisteredContact (data: ContactData){
        updateContact(data)
    }

    return (
        <div>
            <ModalHeader modalTitle="Editar  Contato"/>
            <form onSubmit={handleSubmit(updateRegisteredContact)} className="w-fit lg:w-4/5 mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Nome completo</label>
                    <input type="text" placeholder="Digite seu email" {...register("full_name")} className="h-12 py-2 px-1 border-gray-500 border rounded-md" defaultValue={full_name}/>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Digite seu email" {...register("email")} className="h-12 py-2 px-1 border-gray-500 border rounded-md" defaultValue={email}/>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Digite seu email" {...register("phone")} className="h-12 py-2 px-1 border-gray-500 border rounded-md" defaultValue={phone}/>
                </div>

                <div className="hidden">
                    <input type="text" placeholder="" {...register("id")} value={id}/>
                </div>

                <button type="submit" className="h-12 py-2 px-1 border-blue-500 bg-blue-200 border rounded-md">Editar o contato</button>
        </form>
        </div>
    )
}