import { Client } from 'pg'

const client = new Client(process.env.DATABASE_URL)
  
async function query(query) {
  await client.connect()
  const response = await client.query(query)
  await client.end()

  return response
}

export default {
  query: query
}