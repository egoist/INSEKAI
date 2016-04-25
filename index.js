'use strict'
const Fs = require('fs')
const koa = require('koa')
const jwt = require('koa-jwt')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = koa()
const publicKey = Fs.readFileSync('demo.rsa.pub')
const privateKey = Fs.readFileSync('demo.rsa')

app.use(bodyParser())

const auth = new Router()

auth.get('*', function* (next) {
  try {
    yield next // Attempt to go through the JWT Validator
  } catch(e) {
    if (e.status == 401 ) {
      // Prepare response to user.
      this.status = e.status
      this.body = {error: 'You don\'t have a signed token dude :('}
    } else {
      throw e // Pass the error to the next handler since it wasn't a JWT error.
    }
  }
})

auth.post('/login', function* () {
  const user = {
    username: 'egoist',
    email: '0x142857@gmail.com'
  }
  const token = jwt.sign(user, privateKey, {algorithm: 'RS256'})
  this.body = {token}
})

app.use(auth.routes())
app.use(auth.allowedMethods())
app.use(jwt({
  secret: publicKey,
  algorithm: 'RS256'
}))

// Everything behide this line is under protected

const api = new Router({prefix: '/api'})

api.get('/me', function* () {
  this.body = 'me'
})

app.use(api.routes())
app.use(api.allowedMethods())

app.listen(3066, () => {
  console.log('Listening at http://localhost:3066')
})


