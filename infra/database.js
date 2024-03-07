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
  
  await client.connect()
  const response = await client.query(query)
  await client.end()

  return response
}

export default {
  query: query
}