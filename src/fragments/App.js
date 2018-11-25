import h from 'vnoc'
import Menu from './Menu'
import Messages from './Messages'

function App(props, children) {
  const { path, messages } = props
  return (
    <div class="container-fluid">
      <Menu path={path} />
      <div class="container mt-3">
        <Messages messages={messages} />
        {children}
      </div>
    </div>
  )
}

export default App
