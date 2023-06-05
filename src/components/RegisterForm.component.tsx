import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { accCtx } from "@/context/account.context";
import { RegisterData, registerSchema } from "@/schema/client.schema";

export function RegisterForm (){
    const { register, handleSubmit } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema)
      });

    const { registerAction, failedStatusR } = accCtx()

    async function submitRegister (data: any){
        console.log(data)
        registerAction(data)
    }

    return (
        <form onSubmit={handleSubmit(submitRegister)} className="w-fit lg:w-4/5 mx-auto flex flex-col gap-12">
            {failedStatusR && <p className="text-red-500">{failedStatusR}</p>}
            <div className="flex flex-col gap-3">
                <label htmlFor="">Nome completo</label>
                <input type="text" placeholder="Digite seu email" {...register("full_name")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Digite seu email" {...register("email")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Digite seu email" {...register("phone")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Digite sua senha" {...register("password")} className="h-12 py-2 px-1 border-gray-500 border rounded-md"/>
            </div>
            <button type="submit" className="h-12 py-2 px-1 border-blue-500 bg-blue-200 border rounded-md">Entrar</button>
        </form>
    )
}