import { Client } from 'pg'

const config = {
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
}

async function query(query) {
  const client = new Client(config)

  try {
    await client.connect()
    const response = await client.query(query)
    return response
  }  catch (error) {
    console.error('Error running query', error)
    throw error;
  } finally {
    await client.end()
  }
}

export default {
  query: query,
}