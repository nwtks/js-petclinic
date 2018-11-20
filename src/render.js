import sync from 'syncdom'
import scheduler from 'rafsch'
import App from './fragments/App'

function createRender(entry) {
  const schd = scheduler()
  return (page, path) => {
    const view = App({ path: path }, page)
    schd(() => {
      const oldView = entry.lastChild
      if (oldView) {
        sync(oldView, view)
      } else {
        entry.appendChild(view)
      }
    })
  }
}

export default createRender
