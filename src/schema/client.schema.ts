import { z } from "zod"

export const clientSchema = z.object({
    id: z.string(),
    full_name: z.string(),
    email: z.string(),
    phone: z.string(),
    password: z.string()
})

export const clientReturnSchema = clientSchema.omit({
    id: true,
    password: true
})

export type ClientData = z.infer<typeof clientSchema>
export type ClientReturnData = z.infer<typeof clientReturnSchema>

export const registerSchema = clientSchema.omit({
    id: true
})


export const loginSchema = clientSchema.omit({
    id: true,
    full_name: true,
    phone: true
})

export type LoginData = z.infer<typeof loginSchema>

export type RegisterData = z.infer<typeof registerSchema>