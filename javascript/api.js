const express = require('express');

const app = express();

// middleware
app.use(express.json())
// GET
// app.route('/').get((req, res) => {
//   res.send('Welcome');
// })
// PUT / POST / PATCH aceitam o body
// POST
// app.route('/').post((req, res) => {
//   const { content, idade } = req.body
//   res.send(`Meu nome é: ${content} e minha idade é ${idade}`)
// })

// let author = "S.andre"

// app.route('/').get((req, res) => {
//   res.send(author)
// });

// // PUT
// app.route('/').put((req, res) => {
//   author = req.body
//   res.send(author)
// })

// app.route('/:id').delete((req, res) => {
//   res.send(req.params.id)
// })

// app.route('/').get((req, res) => {
//   res.send('ola')
// })
// app.route('/:variavel').get((req, res) => {
//   res.send(req.params.variavel)
// })
// app.route('/identidade/:nome').get((req, res) => {
//   res.send(req.params.nome)
// })


// app.route('/about/user').get((req, res) => {
//   res.send(req.query.id)
// })

const axios = require('axios');
const url = 'https://api.github.com/users/SouzaAndre0408'


app.route('/').get((req, res) => {
  axios.get(url)
    .then(result => res.send(`<img src='${result.data.avatar_url}'/>`))
    .catch(err => console.error(err.message))
})
app.listen('3000');