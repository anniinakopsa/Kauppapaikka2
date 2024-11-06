const express = require('express')
let router = express.Router()

const etusivu = require('./etusivu')
const yhteystiedot = require('./yhteystiedot')
const tuotteet = require('./tuotteet')
const tuote = require('./tuote')
const adminTuotteet = require('./adminTuotteet') // admin tuotteiden listaus
const uusiTuote = require('./uusiTuote') // admin tuotteen lisäys lomake
const adminLisaaTuote = require('./adminLisaaTuote') // admin tuotteen lisäys tietokantaan
const adminPoistaTuote = require('./adminPoistaTuote') // admin tuotteen poisto tietokannasta
const apiLisaaTuote = require('./apiLisaaTuote') // api rajapinta tuotteen lisäys tietokantaan
const eiloydy = require('./404')

router.get('/', etusivu)
router.get('/yhteystiedot', yhteystiedot)
router.get('/tuotteet', tuotteet)
router.get('/tuote/:id', tuote)
router.get('/admin', adminTuotteet) // admin tuotteiden listaus
router.get('/admin/tuote', uusiTuote) // admin tuotteen lisäys lomake
router.get('/admin/tuote/lisaa', adminLisaaTuote) // admin tuotteen lisäys tietokantaan
router.get('/admin/tuote/poista/:id', adminPoistaTuote) // admin tuotteen poisto tietokannasta
router.post('/api/tuote', apiLisaaTuote) // api rajapinta tuotteen lisäys tietokantaan
router.get('*', eiloydy)

module.exports = router;