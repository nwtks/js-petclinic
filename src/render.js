import patch from 'patch2dom'
import App from './fragments/App'

function createRender(entry, scheduler) {
  return (page, path) => {
    const view = App({ path: path }, page)
    scheduler(() => patch(entry, view))
  }
}

export default createRender
