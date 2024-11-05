module.exports = (req, res) => {
  res.render('../views/uusiTuote', { 
    successMessage: req.query.successMessage,
    errorMessage: req.query.errorMessage 
  });
};