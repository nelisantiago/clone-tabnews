import database from '../../../../infra/database'

export default async function status(request, response) {
  const dbResponse = await database.query('SELECT 1 + 1')

  return await response.status(200).json({ 
    status: 'ok',
    version: '1.0.0',
    data: dbResponse
  })
}