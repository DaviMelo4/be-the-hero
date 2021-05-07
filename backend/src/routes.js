const express = require('express')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const OngController = require('./controllers/OngController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

routes.post('/sessions',SessionController.create)


/**
 * Rotas das ongs
 */
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

/**
 * Rotas dos casos
 */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes