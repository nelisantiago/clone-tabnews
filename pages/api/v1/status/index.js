import database from 'infra/database'

export default async function status(request, response) {
  const updatedAt = new Date().toISOString()
  const databaseName = process.env.POSTGRES_DB

  const databaseVersion = await database.query('SHOW server_version;')
  const databaseMaxConnections = await database.query('SHOW max_connections;')
  const DatabaseCurrentConnections = await database.query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName]
   })

  const responseDatabaseVersion = databaseVersion.rows[0].server_version
  const responseDatabaseMaxConnections = databaseMaxConnections.rows[0].max_connections
  const responseDatabaseCurrentConnections = DatabaseCurrentConnections.rows.length
 
  return await response.status(200).json({ 
    status: 'ok',
    version: '1.0.0',
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: responseDatabaseVersion,
        max_connections: responseDatabaseMaxConnections,
        current_connections: responseDatabaseCurrentConnections,
      },
    }
  })
}