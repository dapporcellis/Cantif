const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',controller.principal)
router.get('/almoco',controller.almoco)
router.get('/login',controller.login)
router.get('/cardapio',controller.cardapio)
router.get('/contatos',controller.contatos)
router.get('/detalhar',controller.detalhar)
router.get('/noticias',controller.noticias)

module.exports = router

