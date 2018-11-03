import h from 'hel' // eslint-disable-line no-unused-vars
import Messages from '../fragments/Messages' // eslint-disable-line no-unused-vars

function WelcomePage(props) {
  return (
    <article>
      <section>
        <Messages messages={props.messages} />
        <h2>Welcome</h2>
        <div class="text-center">
          <img class="img-fluid" src="doubutsu_byouin.png" />
        </div>
      </section>
    </article>
  )
}

export default WelcomePage
