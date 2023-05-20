import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.post('/users', async () => {
  const users = await prisma.user.findFirst()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`🚀 Http server running on http://localhost:3333`)
  })
