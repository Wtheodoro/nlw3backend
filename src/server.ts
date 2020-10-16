import express from 'express'
import 'express-async-errors'
import './database/connection'
import routes from './routes'
import path from 'path'
import errorHandler from './errors/handler'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json()) // serve pro express entender json
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
// rota = conjunto
// recurso = usuario
// métodos HTTP
    // GET, POST, PUT, DELETE
    // GET = buscar uma informação (Lista, item)
    // POST = Cria uma informação nova
    // PUT = edita uma informação
    // DELETE = deleta uma informação
// tipos de parâmetros
    // Query Params: http://localhost:3333/user?search=elon_musk
    // Route Params: "método https" http://localhost:3333/user/1 (identificar um recurso)
    // Body: http://localhost:3333/user (informações complexas que nao cabe nos params a cima)


app.listen(3333)