let Tuote = require('../model/tuote')

module.exports = (req, res) => {

  Tuote.find({ tuoteid: req.params.id })
  .then(tuoteHaku => {
    console.log(tuoteHaku)
    res.render('../views/tuote', {products: tuoteHaku})
  })
  .catch(err => {
    console.log(err)
    res.render('../views/error')
  })
};