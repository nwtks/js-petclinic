import h from 'hec'
import Messages from '../fragments/Messages'
import { show } from '../util'

function VetsPage(props) {
  const { messages, vets } = props
  const showVets = vets && vets.length
  return (
    <article>
      <Messages messages={messages} />
      <section>
        <h2>Veterinarians</h2>
        <ul class="list-group" style={show(showVets)}>
          {showVets ? vets.map(v => <VetItem vet={v} />) : null}
        </ul>
      </section>
    </article>
  )
}

function VetItem(props) {
  const { vet } = props
  const showSpecialties = vet && vet.specialties && vet.specialties.length
  return (
    <li data-domkey={'vet-' + vet.id} class="list-group-item">
      {vet.name}
      {showSpecialties
        ? vet.specialties.map(sp => <SpecialtyItem specialty={sp} />)
        : null}
    </li>
  )
}

function SpecialtyItem(props) {
  const { specialty } = props
  return <span class="badge badge-info ml-2">{specialty.name}</span>
}

export default VetsPage
