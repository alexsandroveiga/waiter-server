import { setupMiddlewares } from '@/main/config/middlewares'
import { setupRoutes } from '@/main/config/routes'

import http from 'node:http'
import express from 'express'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

setupMiddlewares(app)
setupRoutes(app)

export { server, io }
