const URL = "http://localhost:3000/api/v1/migrations"

test("POST: /api/v1/migrations should return 200", async () => {
  const response = await fetch(URL, {
    method: 'POST',
  });
  
  expect(response.status).toBe(200)
})