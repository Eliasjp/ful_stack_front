import { LoginData, RegisterData } from "@/schema/client.schema";
import api from "@/service/api.service";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";

const AccountContext = createContext<AccountSchema>({} as AccountSchema)

interface Props {
    children: ReactNode
}

interface AccountSchema {
    login: (data: LoginData) => void
    registerAction: (data: RegisterData) => void
    setToken: (token: string) => void
    token: string
    failedStatusL: boolean,
    failedStatusR: string
}

export function AccountProvider({children}: Props) {
    const [token, setToken] = useState("")
    const [failedStatusL, setFailedL] = useState(false)
    const [failedStatusR, setFailedR] = useState("")
    const router = useRouter()

    async function login (data: LoginData){
        await api.post("/auth", data)
        .then((response) => {
            window.localStorage.setItem("@token", response.data.token)
            setToken(response.data.token)
            setFailedL(false)
            router.push("/")
        })
        .catch(() => {
            setFailedL(true)
        })
    }

    async function registerAction (data: RegisterData){
        await api.post("/client", data)
        .then((response) => {
            setFailedR("")
            router.push("/login")
        })
        .catch((response) => {
            setFailedR(response.response.data.message)
            
        })
    }

    return (
        <AccountContext.Provider value={{token, failedStatusL, failedStatusR, login, registerAction, setToken}}>
            {children}
        </AccountContext.Provider>
    )
}

export const accCtx = () => useContext(AccountContext);