import { z } from 'zod'

export const Login = z.object({
	email: z.string().email(),
	password: z.string(),
})
export type Login = z.infer<typeof Login>

export const Register = z.object({
	email: z.string().email(),
	password: z.string(),
})
export type Register = z.infer<typeof Register>

export const Forgot = z.object({
	email: z.string().email(),
	password: z.string(),
})
export type Forgot = z.infer<typeof Forgot>

