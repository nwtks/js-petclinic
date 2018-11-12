import h from 'hel'

function Messages(props) {
  const { messages } = props
  const showMessages = messages && messages.length
  return (
    <section>
      {showMessages ? messages.map(m => <Message message={m} />) : null}
    </section>
  )
}

function Message(props) {
  const { message } = props
  return (
    <div class="alert alert-warning" role="alert">
      {message}
    </div>
  )
}

export default Messages
