import express, { response } from 'express'
import './database/connection'
import routes from './routes'

const app = express()
app.use(express.json()) // serve pro express entender json
app.use(routes)

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