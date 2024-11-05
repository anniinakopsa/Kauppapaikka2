let Tuote = require('../model/tuote')

module.exports = (req, res) => {

  Tuote.find()
  .then(tuote => {
    res.render('../views/tuotteet', {products: tuote})
  })
  .catch(err => {
    console.log(err)
    res.render('../views/error')
  })
};