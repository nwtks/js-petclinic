import WelcomePage from './pages/WelcomePage'
import VetsPage from './pages/VetsPage'
import OwnersPage from './pages/OwnersPage'
import OwnerDetailPage from './pages/OwnerDetailPage'
import OwnerEditPage from './pages/OwnerEditPage'
import PetEditPage from './pages/PetEditPage'
import VisitEditPage from './pages/VisitEditPage'

function start(model, render, emitter, router) {
  emitter
    .on('searchOwners', () => {
      model.messages = []
      model.searchOwners()
      router.render()
    })
    .on('setOwnersSearchForm', param => {
      model.messages = []
      model.setOwnersSearchForm(param.name, param.value)
      router.render()
    })
    .on('postOwnerForm', () => {
      model.messages = []
      const ownerId = model.postOwnerForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setOwnerForm', param => {
      model.messages = []
      model.setOwnerForm(param.name, param.value)
      router.render()
    })
    .on('postPetForm', () => {
      model.messages = []
      const ownerId = model.postPetForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setPetForm', param => {
      model.messages = []
      model.setPetForm(param.name, param.value)
      router.render()
    })
    .on('postVisitForm', () => {
      model.messages = []
      const ownerId = model.postVisitForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setVisitForm', param => {
      model.messages = []
      model.setVisitForm(param.name, param.value)
      router.render()
    })

  router
    .route('#/home', (param, next) => {
      model.messages = []
      next(() =>
        render(
          WelcomePage({
            messages: model.messages
          }),
          router.path
        )
      )
    })
    .route('#/vets', (param, next) => {
      model.messages = []
      model.searchVets()
      next(() =>
        render(
          VetsPage({
            messages: model.messages,
            vets: model.vets
          }),
          router.path
        )
      )
    })
    .route('#/owners', (param, next) => {
      model.messages = []
      model.initOwnersSearchForm()
      model.searchOwners()
      next(() =>
        render(
          OwnersPage({
            emitter: emitter,
            messages: model.messages,
            errors: model.errors,
            form: model.ownersSearchForm,
            owners: model.filteredOwners
          }),
          router.path
        )
      )
    })
    .route('#/owners/new', (param, next) => {
      model.messages = []
      model.initOwnerForm()
      next(() =>
        render(
          OwnerEditPage({
            emitter: emitter,
            messages: model.messages,
            errors: model.errors,
            form: model.ownerForm
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId', (param, next) => {
      model.messages = []
      model.findOwner(param.ownerId)
      next(() =>
        render(
          OwnerDetailPage({
            messages: model.messages,
            owner: model.owner
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/edit', (param, next) => {
      model.messages = []
      model.findOwner(param.ownerId)
      model.initOwnerForm(model.owner)
      next(() =>
        render(
          OwnerEditPage({
            emitter: emitter,
            messages: model.messages,
            errors: model.errors,
            form: model.ownerForm
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/pets/new', (param, next) => {
      model.messages = []
      model.loadPetTypes()
      model.findOwner(param.ownerId)
      model.initPetForm(param.ownerId)
      next(() =>
        render(
          PetEditPage({
            emitter: emitter,
            messages: model.messages,
            errors: model.errors,
            form: model.petForm,
            owner: model.owner,
            petTypes: model.petTypes
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/pets/:petId/edit', (param, next) => {
      model.messages = []
      model.loadPetTypes()
      model.findPet(param.ownerId, param.petId)
      model.initPetForm(param.ownerId, model.pet)
      next(() =>
        render(
          PetEditPage({
            emitter: emitter,
            messages: model.messages,
            errors: model.errors,
            form: model.petForm,
            owner: model.owner,
            petTypes: model.petTypes
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/pets/:petId/visits/new', (param, next) => {
      model.messages = []
      model.findPet(param.ownerId, param.petId)
      model.initVisitForm(param.ownerId, param.petId)
      next(() =>
        render(
          VisitEditPage({
            emitter: emitter,
            messages: model.messages,
            errors: model.errors,
            form: model.visitForm,
            owner: model.owner,
            pet: model.pet
          }),
          router.path
        )
      )
    })
    .route(
      '#/owners/:ownerId/pets/:petId/visits/:visitId/edit',
      (param, next) => {
        model.messages = []
        model.findVisit(param.ownerId, param.petId, param.visitId)
        model.initVisitForm(param.ownerId, param.petId, model.visit)
        next(() =>
          render(
            VisitEditPage({
              emitter: emitter,
              messages: model.messages,
              errors: model.errors,
              form: model.visitForm,
              owner: model.owner,
              pet: model.pet
            }),
            router.path
          )
        )
      }
    )
    .route('*', () => router.redirect('#/home'))

  model.load()
  router.start()
}

export default start
