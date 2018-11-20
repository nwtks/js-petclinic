import h from 'hec'
import Menu from './Menu'

function App(props, children) {
  const { path } = props
  return (
    <div class="container-fluid">
      <Menu path={path} />
      <div class="container mt-3">{children}</div>
    </div>
  )
}

export default App
