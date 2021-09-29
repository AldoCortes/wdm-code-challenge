const {Router} = require('express');
const routes = Router();
const {processNumbers} = require('./../controllers/processNumbers');

routes.get('/api/:num', processNumbers);

module.exports = routes;