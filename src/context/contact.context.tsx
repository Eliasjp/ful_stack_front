import api from "@/service/api.service";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { accCtx } from "./account.context";
import { ClientReturnData } from "@/schema/client.schema";
import { ContactData, ContactOmmitedData } from "@/schema/contact.schema";
import { modalContext } from "./modal.context";

const ContactContext = createContext<ContactContextSchema>({} as ContactContextSchema)

interface Props {
    children: ReactNode
}

interface ContactContextSchema {
    listContacts: () => void
    allContacts: Array<ContactData>
    setContacts: (data: Array<ContactData>) => void,
    createContact: (data: ContactOmmitedData) => void
    updateContact: (data: ContactData) => void
    deleteContact: (id: string) => void
}

export function ContactProvider({children}: Props) {
    const [allContacts, setContacts] = useState([] as Array<ContactData>)
    const { setModalContent } = modalContext()
    
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

    async function createContact (data: ContactOmmitedData){
        const getToken: string | null = window.localStorage.getItem("@token")
        const decoded: any = jwtDecode(getToken!)

        await api.post(`/contact/${decoded.sub}`, data, {
            headers: {
                "Authorization": `Bearer ${getToken}`
            }
        })
        .then((response) => {
            const arr = [...allContacts, response.data]
            setModalContent(false)
            setContacts(arr) 
        })
        .catch(() => {
            alert("Um erro ocorreu na criação do contato")   
        })
    }

    async function updateContact (data: ContactData){
        const getToken: string | null = window.localStorage.getItem("@token")
        const { id, ...rest } = data

        await api.patch(`/contact/${id}`, rest, {
            headers: {
                "Authorization": `Bearer ${getToken}`
            }
        })
        .then((response) => {
            const arr = [...allContacts]
            const find = arr.findIndex((element) => element.id == id)
            arr[find] = {...data}
            setModalContent(false)
            setContacts(arr)
        })
        .catch(() => {
            alert("Um erro ocorreu na edição do contato")   
        })
    }

    async function deleteContact (id: string){
        const getToken: string | null = window.localStorage.getItem("@token")

        await api.delete(`/contact/${id}`, {
            headers: {
                "Authorization": `Bearer ${getToken}`
            }
        })
        .then(() => {
            const arr = [...allContacts]
            const find = arr.findIndex((element) => element.id == id)
            arr.splice(find, 1)
            setModalContent(false)
            setContacts(arr)
        })
        .catch(() => {
            alert("Um erro ocorreu na deleção do contato")
        })
    }

    return (
        <ContactContext.Provider value={{allContacts, setContacts, listContacts, createContact, updateContact, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}

export const contactContext = () => useContext(ContactContext)