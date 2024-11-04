module.exports = (req, res) => {
  res.send('Tuote ' + req.params.id + " valittu")
};