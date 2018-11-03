import h from 'hel' // eslint-disable-line no-unused-vars
import Messages from '../fragments/Messages' // eslint-disable-line no-unused-vars

function OwnerEditPage(props) {
  const emitter = props.emitter
  const form = props.ownerForm
  return (
    <article>
      <Messages messages={props.messages} />
      <section>
        <h2>{form.isNew ? 'Add Owner' : 'Update Owner'}</h2>
        <form
          data-domkey="form-owner"
          class="form-horizontal"
          onsubmit={() => emitter.emit('postOwnerForm', {}) && false}
        >
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col">
              <input
                class="form-control"
                type="text"
                value={form.name}
                onchange={ev =>
                  emitter.emit('setOwnerForm', {
                    name: 'name',
                    value: ev.target.value
                  })
                }
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Address</label>
            <div class="col">
              <input
                class="form-control"
                type="text"
                value={form.address}
                onchange={ev =>
                  emitter.emit('setOwnerForm', {
                    name: 'address',
                    value: ev.target.value
                  })
                }
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Telephone</label>
            <div class="col">
              <input
                class="form-control"
                type="text"
                value={form.telephone}
                onchange={ev =>
                  emitter.emit('setOwnerForm', {
                    name: 'telephone',
                    value: ev.target.value
                  })
                }
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-sm-2 col">
              <button class="btn btn-primary" type="submit">
                {form.isNew ? 'Add Owner' : 'Update Owner'}
              </button>
            </div>
          </div>
        </form>
      </section>
    </article>
  )
}

export default OwnerEditPage
