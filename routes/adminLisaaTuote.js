let Tuote = require('../model/tuote');
let Valokuva = require('../model/tuote');

module.exports = (req, res) => {
    console.log(req)
    let BodyValokuvat = [];
    if (req.query.valokuvat !== undefined) {
        BodyValokuvat = req.query.valokuvat.array.forEach(BodyValokuva => new Valokuva({
            url: BodyValokuva.url,
            kuvateksti: BodyValokuva.kuvateksti
        }));
    }

    let UusiTuote = new Tuote({
        tuoteid: req.query.tuoteid,
        nimi: req.query.nimi,
        hinta: req.query.hinta,
        lisatiedot: req.query.lisatiedot,
        valokuvat: [BodyValokuvat]
    });

    UusiTuote
        .save()
        .then(data => {
            res.redirect('/admin/tuote?successMessage=Tuote%20on%20lisätty%20onnistuneesti'); // Uudelleenohjaus onnistuneen tallennuksen jälkeen viestin kanssa
        })
        .catch(err => {
            res.status(500).send({
              message: err.message || "Some error occured during create operation"
            })
        });
};