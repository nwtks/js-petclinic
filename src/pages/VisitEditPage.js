import h from 'hel' // eslint-disable-line no-unused-vars
import Messages from '../fragments/Messages' // eslint-disable-line no-unused-vars

function VisitEditPage(props) {
  const emitter = props.emitter
  const form = props.visitForm
  const owner = props.owner
  const pet = props.pet
  return (
    <article>
      <Messages messages={props.messages} />
      {pet ? (
        <section>
          <h2>Add Visit</h2>
          <div class="card mb-3">
            <div class="card-header">Pet</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-2 font-weight-bold">Name</div>
                  <div class="col">{pet.name}</div>
                  <div class="col-sm-2 font-weight-bold">Birth Date</div>
                  <div class="col">{pet.birthDate}</div>
                  <div class="col-sm-2 font-weight-bold">Type</div>
                  <div class="col">{pet.typeName}</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-2 font-weight-bold">Owner</div>
                  <div class="col">{owner.name}</div>
                </div>
              </li>
            </ul>
          </div>
          <form
            data-domkey="form-visit"
            class="form-horizontal"
            onsubmit={() => emitter.emit('postVisitForm', {}) && false}
          >
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Visit Date</label>
              <div class="col">
                <input
                  class="form-control"
                  type="text"
                  value={form.visitDate}
                  onchange={ev =>
                    emitter.emit('setVisitForm', {
                      name: 'visitDate',
                      value: ev.target.value
                    })
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Description</label>
              <div class="col">
                <textarea
                  class="form-control"
                  value={form.description}
                  rows="5"
                  onchange={ev =>
                    emitter.emit('setVisitForm', {
                      name: 'description',
                      value: ev.target.value
                    })
                  }
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="offset-sm-2 col">
                <button class="btn btn-primary" type="submit">
                  Add Visit
                </button>
              </div>
            </div>
          </form>
        </section>
      ) : null}
      {pet && pet.visits && pet.visits.length ? (
        <section>
          <h2>Previous Visits</h2>
          <ul class="list-group">
            {pet.visits.map(v => (
              <li data-domkey={'visit-' + v.id} class="list-group-item">
                <div class="row">
                  <div class="col-sm-2">{v.visitDate}</div>
                  <div class="col" style="white-space: pre-line">
                    {v.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}

export default VisitEditPage
