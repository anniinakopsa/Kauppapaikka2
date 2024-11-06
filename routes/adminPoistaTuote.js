let Tuote = require('../model/tuote');

module.exports = (req, res) => {

  Tuote.findOneAndDelete({ tuoteid: req.params.id })
  .then(data => {
    console.log(`Poistettu tuote: ${data}`)
    if(!data) {
      res.redirect(`/admin?errorMessage=${encodeURIComponent(`Tuotteen ${req.params.id} poistaminen epäonnistui`)}`); // Uudelleenohjaus epäonnistuneen poistamisen jälkeen virheviestin kanssa
    } else {
      Tuote.find()
      .then(tuoteHaku => {
        console.log(tuoteHaku)
        res.render('../views/admin', {
          successMessage: `Tuotteen ${req.params.id} poistaminen onnistui`,
          products: tuoteHaku
        });
      })
      .catch(err => {
        console.log(err)
      })
    }
  })
  .catch(err => {
    console.log(err)
    res.render('../views/error')
  });
};