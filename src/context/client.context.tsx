import api from "@/service/api.service";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { accCtx } from "./account.context";
import { ClientReturnData } from "@/schema/client.schema";

const ClientContext = createContext<ClientContextSchema>({} as ClientContextSchema)

interface Props {
    children: ReactNode
}

interface ClientContextSchema {
    retrieveClientInformation: () => void
    user: ClientReturnData
    setUser: (data: ClientReturnData) => void
}

export function ClientProvider({children}: Props) {
    const router = useRouter()
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

    return (
        <ClientContext.Provider value={{user, setUser, retrieveClientInformation}}>
            {children}
        </ClientContext.Provider>
    )
}

export const clientContext = () => useContext(ClientContext);