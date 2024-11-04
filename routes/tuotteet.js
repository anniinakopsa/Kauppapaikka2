module.exports = (req, res) => {
  let tuotteet = [
    { name: 'Läppäri', price: 3 },
    { name: 'Pöytäkone', price: 5 },
    { name: 'Puhelin', price: 10 }
  ];

  res.render('../views/tuotteet', {
    products: tuotteet
  });
};