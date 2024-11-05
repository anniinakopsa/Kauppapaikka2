let Tuote = require('../model/tuote');
let Valokuva = require('../model/tuote');

module.exports = (req, res) => {
    let BodyValokuvat = [];
    if (req.body.valokuvat !== undefined) {
        BodyValokuvat = req.body.valokuvat.array.forEach(BodyValokuva => new Valokuva({
            url: BodyValokuva.url,
            kuvateksti: BodyValokuva.kuvateksti
        }));
    }

    let UusiTuote = new Tuote({
        tuoteid: req.body.tuoteid,
        nimi: req.body.nimi,
        hinta: req.body.hinta,
        lisatiedot: req.body.lisatiedot,
        valokuvat: [BodyValokuvat]
    });

    UusiTuote
        .save(UusiTuote)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
              message: err.message || "Some error occured during create operation"
            })
        });
};