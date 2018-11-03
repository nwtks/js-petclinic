import h from 'hel' // eslint-disable-line no-unused-vars
import Messages from '../fragments/Messages' // eslint-disable-line no-unused-vars

function VetsPage(props) {
  const vets = props.vets
  return (
    <article>
      <Messages messages={props.messages} />
      <section>
        <h2>Veterinarians</h2>
        {vets && vets.length ? (
          <ul class="list-group">
            {vets.map(vet => (
              <li data-domkey={'vet-' + vet.id} class="list-group-item">
                {vet.name}
                {specialties(vet.specialties)}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </article>
  )
}

function specialties(sps) {
  return sps && sps.length
    ? sps.map(sp => <span class="badge badge-info ml-2">{sp.name}</span>)
    : null
}

export default VetsPage
