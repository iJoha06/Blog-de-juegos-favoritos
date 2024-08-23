import { z } from 'zod';

export const juegosItemSchema = z.object({
  nombre: z.string(),
  descripcion: z.string(),
  año: z.number(),
  imgURL: z.string().url(),
});

export type JuegosItem = z.infer<typeof juegosItemSchema>;