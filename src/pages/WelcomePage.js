import h from 'hel'
import Messages from '../fragments/Messages'

function WelcomePage(props) {
  return (
    <article>
      <Messages messages={props.messages} />
      <section>
        <h2>Welcome</h2>
        <div class="text-center">
          <img class="img-fluid" src="doubutsu_byouin.png" />
        </div>
      </section>
    </article>
  )
}

export default WelcomePage
