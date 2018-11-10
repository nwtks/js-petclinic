import h from 'hel'
import Messages from '../fragments/Messages'

function OwnersPage(props) {
  const emitter = props.emitter
  const form = props.ownersSearchForm
  const owners = props.owners
  return (
    <article>
      <Messages messages={props.messages} />
      <section>
        <h2>Find Owners</h2>
        <form
          data-domkey="form-find-owners"
          class="form-horizontal"
          onsubmit={() => emitter.emit('searchOwners', {}) && false}
        >
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col">
              <input
                class="form-control"
                type="text"
                value={form.filter}
                onchange={ev =>
                  emitter.emit('setOwnersSearchForm', {
                    name: 'filter',
                    value: ev.target.value
                  })
                }
              />
            </div>
            <div class="col-sm-2">
              <button class="btn btn-secondary" type="submit">
                Find Owners
              </button>
            </div>
          </div>
        </form>
      </section>
      {owners && owners.length ? (
        <section>
          <h2>
            {owners.length} {owners.length === 1 ? 'Owner' : 'Owners'} Found
          </h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th class="d-none d-md-table-cell">Address</th>
                <th>Telephone</th>
                <th class="d-none d-sm-table-cell">Pets</th>
              </tr>
            </thead>
            <tbody>
              {owners.map(owner => (
                <tr data-domkey={'owner-' + owner.id}>
                  <td>
                    <a href={'#/owners/' + owner.id}>{owner.name}</a>
                  </td>
                  <td class="d-none d-md-table-cell">{owner.address}</td>
                  <td>{owner.telephone}</td>
                  <td class="d-none d-sm-table-cell">
                    {owner.pets.map(pet => pet.name).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}
      <section>
        <a href="#/owners/new">
          <button class="btn btn-primary" type="button">
            Add Owner
          </button>
        </a>
      </section>
    </article>
  )
}

export default OwnersPage
