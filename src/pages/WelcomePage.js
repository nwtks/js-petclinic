import h from 'vnoc'
import App from '../fragments/App'

function WelcomePage(props) {
  return (
    <App path="#/home">
      <section>
        <h2>Welcome</h2>
        <div class="text-center">
          <img class="img-fluid" src="doubutsu_byouin.png" />
        </div>
      </section>
    </App>
  )
}

export default WelcomePage
