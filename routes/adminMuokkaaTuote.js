let Tuote = require('../model/tuote')

module.exports = (req, res) => {
  console.log(req.query)

  Tuote.findOneAndUpdate({ tuoteid: req.params.id }, req.query, { new: true })
  .then(data => {
    if(!data) {
      res.redirect(`/admin/tuote/${req.params.id}?errorMessage=${encodeURIComponent("Tuotteen muokkaus epäonnistui")}`);
    } else {
      console.log(data)
      //res.redirect(`/admin/tuote/${req.params.id}?successMessage=Tuote%20on%20muokattu%20onnistuneesti`);

      Tuote.find()
      .then(tuoteHaku => {
        console.log(tuoteHaku)
        res.render('../views/admin', {
          successMessage: `Tuotteen ${req.params.id} muokkaaminen onnistui`,
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
  })
}