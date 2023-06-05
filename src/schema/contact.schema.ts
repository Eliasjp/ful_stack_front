import { z } from "zod"

export const contactSchema = z.object({
    id: z.string(),
    full_name: z.string(),
    email: z.string(),
    phone: z.string()
})

export type ContactData = z.infer<typeof contactSchema>

const contactIdOmitted = contactSchema.omit({
    id: true
})

export type ContactOmmitedData = z.infer<typeof contactIdOmitted>