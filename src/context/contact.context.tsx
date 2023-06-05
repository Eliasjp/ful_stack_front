import api from "@/service/api.service";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { accCtx } from "./account.context";
import { ClientReturnData } from "@/schema/client.schema";
import { ContactData } from "@/schema/contact.schema";

const ContactContext = createContext<ContactContextSchema>({} as ContactContextSchema)

interface Props {
    children: ReactNode
}

interface ContactContextSchema {
    listContacts: () => void
    allContacts: Array<ContactData>
    setContacts: (data: Array<ContactData>) => void
}

export function ContactProvider({children}: Props) {
    const [allContacts, setContacts] = useState([] as Array<ContactData>)

    
    async function listContacts (){
        const getToken: string | null = window.localStorage.getItem("@token")
        await api.get(`/contact`, {
            headers: {
                "Authorization": "Bearer " + getToken
            }
        })
        .then((response) => {
            setContacts(response.data)
        })
    }

    return (
        <ContactContext.Provider value={{allContacts, setContacts, listContacts}}>
            {children}
        </ContactContext.Provider>
    )
}

export const contactContext = () => useContext(ContactContext);