let Tuote = require('../model/tuote')

module.exports = (req, res) => {

  Tuote.find()
  .then(tuote => {
    console.log(tuote)
    res.render('../views/tuotteet', {products: tuote})
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).send({ message: err.message || "Error" })
  })
};