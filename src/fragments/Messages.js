import h from 'hel' // eslint-disable-line no-unused-vars

function Messages(props) {
  const messages = props.messages
  return (
    <section>
      {messages && messages.length ? messages.map(message) : null}
    </section>
  )
}

function message(msg) {
  return (
    <div class="alert alert-warning" role="alert">
      {msg}
    </div>
  )
}

export default Messages
