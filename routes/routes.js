const express = require('express')
let router = express.Router()

const etusivu = require('./etusivu')
const yhteystiedot = require('./yhteystiedot')
const tuotteet = require('./tuotteet')
const tuote = require('./tuote')
const adminTuotteet = require('./adminTuotteet')
const uusiTuote = require('./uusiTuote')
const adminLisaaTuote = require('./adminLisaaTuote')
const eiloydy = require('./404')

router.get('/', etusivu)
router.get('/yhteystiedot', yhteystiedot)
router.get('/tuotteet', tuotteet)
router.get('/tuote/:id', tuote)
router.get('/admin', adminTuotteet)
router.get('/uusiTuote', uusiTuote)
router.post('/tuote', adminLisaaTuote)
router.get('*', eiloydy)

module.exports = router;