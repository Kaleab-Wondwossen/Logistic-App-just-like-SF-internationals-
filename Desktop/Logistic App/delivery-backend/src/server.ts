import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.get('/v1/health', (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() })
})

const PORT = Number(process.env.PORT || 8080)
app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`)
})
