import h from 'hel'
import Messages from '../fragments/Messages'

function PetEditPage(props) {
  const emitter = props.emitter
  const form = props.petForm
  const errors = props.errors
  const owner = props.owner
  const types = props.petTypes
  return (
    <article>
      <Messages messages={props.messages} />
      {owner ? (
        <section>
          <h2>{form.isNew ? 'Add Pet' : 'Update Pet'}</h2>
          <div class="card mb-3">
            <div class="card-header">Owner</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-2 font-weight-bold">Name</div>
                  <div class="col">{owner.name}</div>
                </div>
              </li>
            </ul>
          </div>
          <form
            data-domkey="form-pet"
            class="form-horizontal"
            onsubmit={() => emitter.emit('postPetForm', {}) && false}
          >
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Name</label>
              <div class=" col">
                <input
                  class={'form-control' + (errors.name ? ' is-invalid' : '')}
                  type="text"
                  value={form.name}
                  onchange={ev =>
                    emitter.emit('setPetForm', {
                      name: 'name',
                      value: ev.target.value
                    })
                  }
                />
                <div class="invalid-feedback">{errors.name}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Birth Date</label>
              <div class=" col">
                <input
                  class={
                    'form-control' + (errors.birthDate ? ' is-invalid' : '')
                  }
                  type="text"
                  value={form.birthDate}
                  onchange={ev =>
                    emitter.emit('setPetForm', {
                      name: 'birthDate',
                      value: ev.target.value
                    })
                  }
                />
                <div class="invalid-feedback">{errors.birthDate}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Type</label>
              <div class="col">
                <select
                  class={'form-control' + (errors.typeId ? ' is-invalid' : '')}
                  value={form.typeId}
                  onchange={ev =>
                    emitter.emit('setPetForm', {
                      name: 'typeId',
                      value: ev.target.value
                    })
                  }
                >
                  <option data-domkey="" />
                  {types.map(t => (
                    <option
                      data-domkey={t.id}
                      value={t.id}
                      selected={form.typeId === t.id}
                    >
                      {t.name}
                    </option>
                  ))}
                </select>
                <div class="invalid-feedback">{errors.typeId}</div>
              </div>
            </div>
            <div class="form-group row">
              <div class="offset-sm-2 col">
                <button class="btn btn-primary" type="submit">
                  {form.isNew ? 'Add Pet' : 'Update Pet'}
                </button>
              </div>
            </div>
          </form>
        </section>
      ) : null}
    </article>
  )
}

export default PetEditPage
