import { modalContext } from "@/context/modal.context";
import { ContactData } from "@/schema/contact.schema";
import { UpdateContactTemplate } from "./contactUpdate.component";
import { DeleteContactTemplate } from "./contactDelete.component";

interface RenderContactSchema {
    list: Array<ContactData>
}

export function RenderContacts ({ list }: RenderContactSchema){
    const { setModalContent } = modalContext()

    function mappingList (){
        return (
            list.map((element) => {
                return (
                    <li key={element.id} className="flex flex-col gap-1 border border-cyan-300 bg-cyan-100 rounded p-4 gap-4">
                        <section>
                            <p>Nome:</p>
                            <p>{element.full_name}</p>
                        </section>
                        <section>
                            <p>Email:</p>
                            <p>{element.email}</p>
                        </section>
                        <section>
                            <p>Telefone:</p>
                            <p>{element.phone}</p>
                        </section>
                        <div className="flex justify-between">
                            <button onClick={() => setModalContent(<UpdateContactTemplate id={element.id}
                            full_name={element.full_name} 
                            email={element.email} phone={element.phone}
                            ></UpdateContactTemplate>)}
                            className='border border-green-400 bg-green-300 rounded p-3'
                            >Editar Contato</button>
                            <button onClick={() => setModalContent(<DeleteContactTemplate id={element.id}></DeleteContactTemplate>)} 
                            className='border border-red-400 bg-red-300 rounded p-3'>Deletar contato</button>
                        </div>
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