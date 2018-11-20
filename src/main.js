import emitter from 'temi'
import hashpath from 'hashpath'
import createModel from './model'
import createRender from './render'
import start from './app'

start(
  createModel(),
  createRender(document.getElementById('app')),
  emitter(),
  hashpath()
)
