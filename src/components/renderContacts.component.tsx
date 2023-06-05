import { modalContext } from "@/context/modal.context";
import { ContactData } from "@/schema/contact.schema";
import { UpdateContactTemplate } from "./contactUpdate.component";

interface RenderContactSchema {
    list: Array<ContactData>
}

export function RenderContacts ({ list }: RenderContactSchema){
    const { setModalContent } = modalContext()

    function mappingList (){
        return (
            list.map((element) => {
                return (
                    <li key={element.id}>
                        <h3>{element.full_name}</h3>
                        <p>{element.email}</p>
                        <p>{element.phone}</p>
                        <button onClick={() => setModalContent(<UpdateContactTemplate id={element.id}
                         full_name={element.full_name} 
                         email={element.email} phone={element.phone}
                         ></UpdateContactTemplate>)}>Editar Contato</button>
                    </li>
                )
            })
        )
    }

    return (
        <>
            {!list.length ? (<p>Você não possui nenhum contato</p>) :
             (
                <ul className="flex flex-col gap-9">
                    {mappingList()}
                </ul>
            )}
        </>
    )
}