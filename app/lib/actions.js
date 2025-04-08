'use server';

import {z} from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
   //// insertUser(firstName,lastName, country, callingCode, phone, email, password, date);
   await sql`
     INSERT INTO users(firstName, name, service, country, callingCode, phone, email, password, date)
     VALUES (${firstName}, ${lastName}, ${service}, ${country}, ${callingCode}, ${phone}, ${email}, ${password}, ${date})
     `; 
   revalidatePath('/checkout');
    redirect('/dashboard');
}
