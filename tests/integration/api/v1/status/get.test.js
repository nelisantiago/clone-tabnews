const URL = "http://localhost:3000/api/v1/status"

test("GET: /api/v1/status should return 200", async () => {
  const response = await fetch(URL)

  const responseBody = await response.json()
  const responseBodyDependencies = responseBody.dependencies
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString()

  expect(response.status).toBe(200)
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt)
  expect(responseBodyDependencies.database.version).toBe("16.2")
  expect(responseBodyDependencies.database.max_connections)
  expect(responseBodyDependencies.database.current_connections).toEqual(1)
})