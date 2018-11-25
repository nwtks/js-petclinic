import h from 'vnoc'
import App from '../fragments/App'
import { show } from '../util'

function VetsPage(props) {
  const { messages, vets } = props.state
  const showVets = vets && vets.length
  return (
    <App path="#/vets" messages={messages}>
      <section>
        <h2>Veterinarians</h2>
        <ul class="list-group" style={show(showVets)}>
          {showVets ? vets.map(v => <VetItem vet={v} />) : null}
        </ul>
      </section>
    </App>
  )
}

function VetItem(props) {
  const { vet } = props
  const showSpecialties = vet && vet.specialties && vet.specialties.length
  return (
    <li domkey={'vet-' + vet.id} class="list-group-item">
      {vet.name}
      {showSpecialties
        ? vet.specialties.map(sp => (
            <span class="badge badge-info ml-2">{sp.name}</span>
          ))
        : null}
    </li>
  )
}

export default VetsPage
