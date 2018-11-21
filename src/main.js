import emitter from 'temi'
import router from 'hashedpath'
import createModel from './model'
import createRender from './render'
import start from './app'

start(
  createModel(),
  createRender(document.getElementById('app')),
  emitter(),
  router()
)
