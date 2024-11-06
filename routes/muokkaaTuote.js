let Tuote = require('../model/tuote')

module.exports = (req, res) => {
  console.log(req.params)
  
  Tuote.findOne({ tuoteid: req.params.id })
  .then(tuote => {
    console.log(tuote)
    res.render('../views/muokkaaTuote', {
      successMessage: req.query.successMessage,
      errorMessage: req.query.errorMessage,
      product: tuote
    })
  })
  .catch(err => {
    console.log(err)
    res.render('../views/error')
  })
}