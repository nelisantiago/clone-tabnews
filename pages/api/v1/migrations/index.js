import migrationsRunner from 'node-pg-migrate'
import { join } from 'node:path'
import { NextApiRequest, NextApiResponse } from 'next'

const MigrationsOptions = {
  databaseUrl: process.env.DATABASE_URL,
  dir: join("infra", "migrations"),
  direction: 'up',
  dryRun: true,
  migrationsTable: 'test_migrations',
  verbose: true,
}
 
/**
 * @param {NextApiRequest} request
 * @param {NextApiResponse} response
*/
export default async (request, response) => {
switch(request.method) {
  case 'GET': {
    const migrations = await migrationsRunner(MigrationsOptions)
    return response.status(200).json([...migrations])
  }
  case 'POST': {
    return response.status(200).json({ message: 'Successfully' })
  }
  default:
    return response.status(405).json({ message: 'Method not allowed' })
  }
}