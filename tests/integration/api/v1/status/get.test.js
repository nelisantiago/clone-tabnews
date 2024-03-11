const URL = "http://localhost:3000/api/v1/status"

test("GET: /api/v1/status", async () => {
  const response = await fetch(URL)

  expect(response.status).toBe(200)
})