import h from 'hel'
import Messages from '../fragments/Messages'

function OwnerDetailPage(props) {
  const owner = props.owner
  return (
    <article>
      <Messages messages={props.messages} />
      {owner ? (
        <section class="mb-4">
          <h2>Owner</h2>
          <div class="card mb-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-2 font-weight-bold">Name</div>
                  <div class="col">{owner.name}</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-2 font-weight-bold">Address</div>
                  <div class="col">{owner.address}</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-2 font-weight-bold">Telephone</div>
                  <div class="col">{owner.telephone}</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col">
                    <a
                      class="btn btn-primary"
                      href={'#/owners/' + owner.id + '/edit'}
                    >
                      Edit Owner
                    </a>
                  </div>
                  <div class="col">
                    <a
                      class="btn btn-primary"
                      href={'#/owners/' + owner.id + '/pets/new'}
                    >
                      Add New Pet
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      ) : null}
      {owner && owner.pets && owner.pets.length ? (
        <section>
          <h2>Pets and Visits</h2>
          {owner.pets.map(pet => (
            <div data-domkey={'pet-' + pet.id} class="card mb-2">
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
                    <div class="col">
                      <a
                        class="btn btn-primary"
                        href={
                          '#/owners/' + owner.id + '/pets/' + pet.id + '/edit'
                        }
                      >
                        Edit Pet
                      </a>
                    </div>
                    <div class="col">
                      <a
                        class="btn btn-primary"
                        href={
                          '#/owners/' +
                          owner.id +
                          '/pets/' +
                          pet.id +
                          '/visits/new'
                        }
                      >
                        Add Visit
                      </a>
                    </div>
                  </div>
                </li>
                {pet.visits.map(v => (
                  <li data-domkey={'visit-' + v.id} class="list-group-item">
                    <div class="row">
                      <div class="col-sm-2">{v.visitDate}</div>
                      <div class="col" style="white-space: pre-line">
                        {v.description}
                      </div>
                      <div class="col-sm-2">
                        <a
                          class="btn btn-primary"
                          href={
                            '#/owners/' +
                            owner.id +
                            '/pets/' +
                            pet.id +
                            '/visits/' +
                            v.id +
                            '/edit'
                          }
                        >
                          Edit Visit
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : null}
    </article>
  )
}

export default OwnerDetailPage
