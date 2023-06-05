import { LoginData } from "@/schema/client.schema";
import api from "@/service/api.service";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";

const AccountContext = createContext<AccountSchema>({} as AccountSchema)

interface Props {
    children: ReactNode
}

interface AccountSchema {
    login: (data: LoginData) => void
    token: string
    failedLogin: boolean
}

export function AccountProvider({children}: Props) {
    const [token, setToken] = useState("")
    const [failedLogin, setFailed] = useState(false)
    const router = useRouter()

    async function login (data: LoginData){
        await api.post("/auth", data)
        .then((response) => {
            setToken(response.data.token)
            setFailed(false)
            router.push("/dashboard")
        })
        .catch(() => {
            setFailed(true)
        })
    }

    return (
        <AccountContext.Provider value={{token, failedLogin, login}}>
            {children}
        </AccountContext.Provider>
    )
}

export const accCtx = () => useContext(AccountContext);