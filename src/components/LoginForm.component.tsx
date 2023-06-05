import { useForm } from "react-hook-form";
import { Input } from "./Input.component";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, loginSchema } from "../schema/client.schema";
import api from "../service/api.service";
import { useContext, useEffect } from "react";
import { accCtx } from "@/context/login.context";

export function LoginForm (){
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
      });

    const { login, failedLogin } = accCtx()

    async function submitLogin (data: any){
        login(data)
    }

    return (
        <form onSubmit={handleSubmit(submitLogin)} className="w-fit lg:w-4/5 mx-auto flex flex-col gap-12">
            {failedLogin && <p className="text-red-500">Email ou senha inválido</p>}
            <div className="flex flex-col gap-3">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Digite seu email" {...register("email")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Digite sua senha" {...register("password")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
            </div>
            <button type="submit" className="h-12 py-2 px-1 border-blue-500 bg-blue-200 border rounded-md">Entrar</button>
        </form>
    )
}