import h from 'hel' // eslint-disable-line no-unused-vars
import Menu from './Menu' // eslint-disable-line no-unused-vars

function App(props, children) {
  const path = props.path
  return (
    <div class="container-fluid">
      <Menu path={path} />
      <div class="container mt-3">{children}</div>
    </div>
  )
}

export default App
