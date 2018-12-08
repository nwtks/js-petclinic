import createOwnersModel from './models/owners'
import createVetsModel from './models/vets'
import WelcomePage from './pages/WelcomePage'
import VetsPage from './pages/VetsPage'
import OwnersPage from './pages/OwnersPage'
import OwnerDetailPage from './pages/OwnerDetailPage'
import OwnerEditPage from './pages/OwnerEditPage'
import PetEditPage from './pages/PetEditPage'
import VisitEditPage from './pages/VisitEditPage'

const start = (render, emitter, router) => {
  const ownersModel = createOwnersModel()
  const vetsModel = createVetsModel()

  emitter
    .on('searchOwners', () => {
      ownersModel.messages = []
      ownersModel.searchOwners()
      router.render()
    })
    .on('inputOwnersSearchForm', param =>
      ownersModel.inputOwnersSearchForm(param.name, param.value)
    )
    .on('postOwnerForm', () => {
      ownersModel.messages = []
      const ownerId = ownersModel.postOwnerForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setOwnerForm', param => {
      ownersModel.setOwnerForm(param.name, param.value)
      router.render()
    })
    .on('inputOwnerForm', param =>
      ownersModel.inputOwnerForm(param.name, param.value)
    )
    .on('postPetForm', () => {
      ownersModel.messages = []
      const ownerId = ownersModel.postPetForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setPetForm', param => {
      ownersModel.setPetForm(param.name, param.value)
      router.render()
    })
    .on('inputPetForm', param =>
      ownersModel.inputPetForm(param.name, param.value)
    )
    .on('postVisitForm', () => {
      ownersModel.messages = []
      const ownerId = ownersModel.postVisitForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setVisitForm', param => {
      ownersModel.setVisitForm(param.name, param.value)
      router.render()
    })
    .on('inputVisitForm', param =>
      ownersModel.inputVisitForm(param.name, param.value)
    )

  router
    .route('#/home', (param, next) => next(() => render(WelcomePage)))
    .route('#/vets', (param, next) => {
      vetsModel.messages = []
      vetsModel.searchVets()
      next(() =>
        render(VetsPage, {
          messages: vetsModel.messages,
          vets: vetsModel.vets
        })
      )
    })
    .route('#/owners', (param, next) => {
      ownersModel.messages = []
      ownersModel.initOwnersSearchForm()
      ownersModel.searchOwners()
      next(() =>
        render(OwnersPage, {
          messages: ownersModel.messages,
          errors: ownersModel.errors,
          form: ownersModel.ownersSearchForm,
          owners: ownersModel.filteredOwners
        })
      )
    })
    .route('#/owners/new', (param, next) => {
      ownersModel.messages = []
      ownersModel.initOwnerForm()
      next(() =>
        render(OwnerEditPage, {
          messages: ownersModel.messages,
          errors: ownersModel.errors,
          form: ownersModel.ownerForm
        })
      )
    })
    .route('#/owners/:ownerId', (param, next) => {
      ownersModel.messages = []
      ownersModel.findOwner(param.ownerId)
      next(() =>
        render(OwnerDetailPage, {
          messages: ownersModel.messages,
          owner: ownersModel.owner
        })
      )
    })
    .route('#/owners/:ownerId/edit', (param, next) => {
      ownersModel.messages = []
      ownersModel.findOwner(param.ownerId)
      ownersModel.initOwnerForm(ownersModel.owner)
      next(() =>
        render(OwnerEditPage, {
          messages: ownersModel.messages,
          errors: ownersModel.errors,
          form: ownersModel.ownerForm
        })
      )
    })
    .route('#/owners/:ownerId/pets/new', (param, next) => {
      ownersModel.messages = []
      ownersModel.loadPetTypes()
      ownersModel.findOwner(param.ownerId)
      ownersModel.initPetForm(param.ownerId)
      next(() =>
        render(PetEditPage, {
          messages: ownersModel.messages,
          errors: ownersModel.errors,
          form: ownersModel.petForm,
          owner: ownersModel.owner,
          petTypes: ownersModel.petTypes
        })
      )
    })
    .route('#/owners/:ownerId/pets/:petId/edit', (param, next) => {
      ownersModel.messages = []
      ownersModel.loadPetTypes()
      ownersModel.findPet(param.ownerId, param.petId)
      ownersModel.initPetForm(param.ownerId, ownersModel.pet)
      next(() =>
        render(PetEditPage, {
          messages: ownersModel.messages,
          errors: ownersModel.errors,
          form: ownersModel.petForm,
          owner: ownersModel.owner,
          petTypes: ownersModel.petTypes
        })
      )
    })
    .route('#/owners/:ownerId/pets/:petId/visits/new', (param, next) => {
      ownersModel.messages = []
      ownersModel.findPet(param.ownerId, param.petId)
      ownersModel.initVisitForm(param.ownerId, param.petId)
      next(() =>
        render(VisitEditPage, {
          messages: ownersModel.messages,
          errors: ownersModel.errors,
          form: ownersModel.visitForm,
          owner: ownersModel.owner,
          pet: ownersModel.pet
        })
      )
    })
    .route(
      '#/owners/:ownerId/pets/:petId/visits/:visitId/edit',
      (param, next) => {
        ownersModel.messages = []
        ownersModel.findVisit(param.ownerId, param.petId, param.visitId)
        ownersModel.initVisitForm(param.ownerId, param.petId, ownersModel.visit)
        next(() =>
          render(VisitEditPage, {
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.visitForm,
            owner: ownersModel.owner,
            pet: ownersModel.pet
          })
        )
      }
    )
    .route('*', () => router.redirect('#/home'))

  ownersModel.load()
  router.start()
}

export default start
