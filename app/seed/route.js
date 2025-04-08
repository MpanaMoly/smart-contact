
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      service VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      callingCode VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      date DATE NOT NULL
    );
  `;

  return 1;
}



export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers()
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
