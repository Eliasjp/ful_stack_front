import api from "@/service/api.service";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { accCtx } from "./account.context";
import { ClientReturnData } from "@/schema/client.schema";
import { modalContext } from "./modal.context";

const ClientContext = createContext<ClientContextSchema>({} as ClientContextSchema)

interface Props {
    children: ReactNode
}

interface ClientContextSchema {
    retrieveClientInformation: () => void
    user: ClientReturnData
    setUser: (data: ClientReturnData) => void
    updateClient: (data: ClientReturnData) => void
}

export function ClientProvider({children}: Props) {
    const router = useRouter()
    const { setModalContent } = modalContext()
    const [user, setUser] = useState({} as ClientReturnData)

    async function retrieveClientInformation (){
        const getToken: string | null = window.localStorage.getItem("@token")
        const decoded: any = jwtDecode(getToken!)
        await api.get(`/client/${decoded.sub}`)
        .then((response) => {
            setUser(response.data)
        })
        .catch(() => {
            window.localStorage.removeItem("@token")
            router.push("/login")
        })
    }

    async function updateClient (data: ClientReturnData){
        const getToken: string | null = window.localStorage.getItem("@token")
        const decoded: any = jwtDecode(getToken!)
        console.log(decoded.sub)
        console.log(getToken)
        await api.patch(`/client/${decoded.sub}`, data, {
            headers: {
                "Authorization": "Bearer " + getToken,
            }
        })
        .then((response) => {
            setUser(response.data)
            setModalContent(false)
        })
        .catch((response) => {
            alert("Ocorreu uma falha na edição")
            // window.localStorage.removeItem("@token")
            // router.push("/login")
        })
    }

    return (
        <ClientContext.Provider value={{user, setUser, retrieveClientInformation, updateClient}}>
            {children}
        </ClientContext.Provider>
    )
}

export const clientContext = () => useContext(ClientContext);