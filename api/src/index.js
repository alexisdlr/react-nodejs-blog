import express from 'express'
import { PORT } from './config.js'
import auth from './routes/auth.routes.js'
import posts from './routes/posts.routes.js'
const app = express()

app.use(express.json())
app.use(auth)
app.use(posts)
app.listen(PORT)