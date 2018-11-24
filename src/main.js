import createEmitter from 'temi'
import createRouter from 'hashedpath'
import createScheduler from 'rafsch'
import createOwnersModel from './models/owners'
import createVetsModel from './models/vets'
import createRender from './render'
import start from './app'

start(
  createOwnersModel(),
  createVetsModel(),
  createRender(document.getElementById('app'), createScheduler()),
  createEmitter(),
  createRouter()
)
