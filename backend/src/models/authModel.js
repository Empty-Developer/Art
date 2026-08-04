import { z } from "zod";

export const registrationModel = z.object({
  name: z
    .string({required_error: "error"})
    .min(6, "the name must be at minimum 6 character long")
    .max(60, "the name very long")
    .trim(),
  email: z
    .string({required_error: "error"})
    .email("don`t correct")
    .toLowerCase(),
  password: z
    .string({required_error: "error"})
    .min(6, "the password must be at minimum 6 character long")
    .max(60, "the password very long")
    .regex(/[A-Za-z]/, "the password must be at one letter")
    .regex(/[0-9]/, "the password must be at one number")
})

export const loginModel = z.object({
  email: z.string().email('don`t correct'),
  password: z.string().min(6, "don`t correct")
})