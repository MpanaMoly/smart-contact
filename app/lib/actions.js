'use server';

import {z} from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { userAgent } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

const FormSchema = z.object({
    id: z.string(),
    service: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    country: z.string(),
    callingCode: z.string(),
    phone: z.string(),
    email: z.string().email(),
    password: z.string(),
    date: z.string(),
});

const Inscription = FormSchema.omit({ id: true, date: true});


export async function inscription(formData) {
    const {service, firstName, lastName, country, callingCode, phone, email, password} = Inscription.parse({
        service: formData.get('service'),
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        country: formData.get('country'),
        callingCode: formData.get('calling-code'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
    const date = new Date().toISOString().split('T')[0];
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
   //// insertUser(firstName,lastName, country, callingCode, phone, email, password, date);
   await sql`
     INSERT INTO users(firstName, name, service, country, callingCode, phone, email, password, date)
     VALUES (${firstName}, ${lastName}, ${service}, ${country}, ${callingCode}, ${phone}, ${email}, ${hashedPassword}, ${date})
     `; 
   revalidatePath('/services');
    redirect('/login');
}


export async function authenticate(
    prevState,
    formData
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }