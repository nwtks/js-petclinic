import sync from 'syncdom'
import App from './fragments/App'

function createRender(entry) {
  return (page, path) => {
    const view = App({ path: path }, page)
    const oldView = entry.lastChild
    if (oldView) {
      sync(oldView, view)
    } else {
      entry.appendChild(view)
    }
  }
}

export default createRender
