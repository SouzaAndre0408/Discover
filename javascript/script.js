// function callback(dados) {
//   console.log(dados())
// }

// callback(() => {
//   return "Ola mundaooo"
// })


// const https = require('https')
// const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

// https.get(API, res => {
//   console.log(res.statusCode)
// })

// console.log('conectando API')

// promise

// const pedirCarro = true
// console.log('pedindo uber')

// const promessa = new Promise((resolve, reject) => {
//   if (pedirCarro) {
//     return resolve('pedido aceito!')
//   }
//   return reject('pedido negado!')
// })

// console.log('aguardando')
// promessa
//   .then(result => console.log(result))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finalizado'))

// API github com fetch

// const apiGitHub = 'https://api.github.com/users/SouzaAndre0408'

// fetch(apiGitHub)
//   .then(response => response.json())
//   .then(data => fetch(data.repos_url))
//   .then(res => res.json())
//   .then(d => console.log(d))
//   .catch(err => console.log(err))

// axios
// axios.get('https://api.github.com/users/SouzaAndre0408')
//   .then(response => axios.get(response.data.repos_url))
//   .then(respos => console.log(respos.data))
//   .catch(err => console.log(err))

// promise com axios
// Promise.all([
//   axios.get('https://api.github.com/users/SouzaAndre0408'),
//   axios.get('https://api.github.com/users/SouzaAndre0408/repos')
// ])
//   .then(responses => {
//     console.log(responses[0].data.login)
//     console.log(responses[1].data.length)
//   })
//   .catch(err => console.log(err.message))

// const promessa = new Promise((resolve, reject) => {
//   return resolve('ok')
// })

// const start = async () => {
//   try {
//     const result = await promessa
//     console.log(result)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     console.log('done')
//   }
// }

// start()

// async / await com fecth
// const userGit = async () => {
//   const url = 'https://api.github.com/users/SouzaAndre0408'
//   const user = await fetch(url).then(r => r.json())
//   const userRepos = await fetch(user.repos_url).then(r => r.json())
//   console.log(user.login, userRepos)
// }

// userGit().catch(err => { console.log(err) })

const userAxios = async () => {
  try {
    const url = await axios.get('https://api.github.com/users/SouzaAndre0408')
    const repos = await axios.get(url.data.repos_url)
    console.log(repos.data)
  } catch (error) {
    console.log(error)
  }
}

userAxios()