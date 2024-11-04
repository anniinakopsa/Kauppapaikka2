let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let valokuvaSchema = new Schema({
    url: { type: String },
    kuvateksti: { type: String },
    created_at: Date,
    updated_at: Date
});

let Valokuva = mongoose.model('Valokuva', valokuvaSchema);
module.exports = Valokuva;

let tuoteSchema = new Schema({
    tuoteid: { type: String, required: true, unique: true },
    nimi: { type: String, required: true },
    hinta: { type: Number, required: true },
    lisatiedot: String,
    valokuvat: [Valokuva.schema],
    created_at: Date,
    updated_at: Date
});

const Tuote = mongoose.model('Tuote', tuoteSchema);
module.exports = Tuote;