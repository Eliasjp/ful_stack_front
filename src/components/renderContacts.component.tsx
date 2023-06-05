import { ContactData } from "@/schema/contact.schema";

interface RenderContactSchema {
    list: Array<ContactData>
}

export function RenderContacts ({ list }: RenderContactSchema){
    function mappingList (){
        return (
            list.map((element) => {
                return (
                    <li>
                        <h3>{element.full_name}</h3>
                        <p>{element.email}</p>
                        <p>{element.phone}</p>
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