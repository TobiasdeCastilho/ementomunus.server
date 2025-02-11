import { z } from 'zod';

export const Register = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string()
});
export type Register = z.infer<typeof Register>;

export const Confirm = z.object({
  firstName: z.string(),
  lastName: z.string()
});
export type Confirm = z.infer<typeof Confirm>;

