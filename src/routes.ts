import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()

routes.get('/orphanages/', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages/', OrphanagesController.create)

export default routes

// Padrão MVC (Model, View, Controllers)
    // Model = Uma representação de uma tabela no banco ou algo do tipo
    // View = Como as informações ficam visiveis no front end
    // Controllers = Lugar onde fica a lógica das rotas