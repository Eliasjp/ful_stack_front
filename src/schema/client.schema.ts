import { z } from "zod"

export const clientSchema = z.object({
    id: z.string(),
    full_name: z.string(),
    email: z.string(),
    phone: z.string(),
    password: z.string()
})

export type ClientData = z.infer<typeof clientSchema>

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