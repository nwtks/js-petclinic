import createEmitter from '@nwtks/temi';
import createRouter from '@nwtks/hashedpath';
import createScheduler from '@nwtks/rafsch';
import patch from '@nwtks/patch2dom';
import start from './app';

const emitter = createEmitter();
const router = createRouter();
const scheduler = createScheduler();
const entry = document.getElementById('app');
const render = (view, state) => {
  scheduler(() => {
    patch(entry, view({ state: state, emit: emitter.emit }));
  });
};
start(render, emitter, router);
