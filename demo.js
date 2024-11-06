const axios = require('axios');

// GET-pyyntö
axios.get('https://api.chucknorris.io/jokes/random')
.then(response => {
  console.log(response.data.value);
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// axios.post('http://httpbin.org/post', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log('ONNISTUI')
//   console.log(response.data)
// })
// .catch(function (error) {
//   console.log(error)
// })