import WelcomePage from './pages/WelcomePage'
import VetsPage from './pages/VetsPage'
import OwnersPage from './pages/OwnersPage'
import OwnerDetailPage from './pages/OwnerDetailPage'
import OwnerEditPage from './pages/OwnerEditPage'
import PetEditPage from './pages/PetEditPage'
import VisitEditPage from './pages/VisitEditPage'

function start(ownersModel, vetsModel, render, emitter, router) {
  emitter
    .on('searchOwners', () => {
      ownersModel.messages = []
      ownersModel.searchOwners()
      router.render()
    })
    .on('setOwnersSearchForm', param => {
      ownersModel.messages = []
      ownersModel.setOwnersSearchForm(param.name, param.value)
      router.render()
    })
    .on('postOwnerForm', () => {
      ownersModel.messages = []
      const ownerId = ownersModel.postOwnerForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setOwnerForm', param => {
      ownersModel.messages = []
      ownersModel.setOwnerForm(param.name, param.value)
      router.render()
    })
    .on('postPetForm', () => {
      ownersModel.messages = []
      const ownerId = ownersModel.postPetForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setPetForm', param => {
      ownersModel.messages = []
      ownersModel.setPetForm(param.name, param.value)
      router.render()
    })
    .on('postVisitForm', () => {
      ownersModel.messages = []
      const ownerId = ownersModel.postVisitForm()
      ownerId ? router.redirect('#/owners/' + ownerId) : router.render()
    })
    .on('setVisitForm', param => {
      ownersModel.messages = []
      ownersModel.setVisitForm(param.name, param.value)
      router.render()
    })

  router
    .route('#/home', (param, next) => {
      next(() =>
        render(
          WelcomePage({
            messages: []
          }),
          router.path
        )
      )
    })
    .route('#/vets', (param, next) => {
      vetsModel.messages = []
      vetsModel.searchVets()
      next(() =>
        render(
          VetsPage({
            messages: vetsModel.messages,
            vets: vetsModel.vets
          }),
          router.path
        )
      )
    })
    .route('#/owners', (param, next) => {
      ownersModel.messages = []
      ownersModel.initOwnersSearchForm()
      ownersModel.searchOwners()
      next(() =>
        render(
          OwnersPage({
            emit: emitter.emit,
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.ownersSearchForm,
            owners: ownersModel.filteredOwners
          }),
          router.path
        )
      )
    })
    .route('#/owners/new', (param, next) => {
      ownersModel.messages = []
      ownersModel.initOwnerForm()
      next(() =>
        render(
          OwnerEditPage({
            emit: emitter.emit,
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.ownerForm
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId', (param, next) => {
      ownersModel.messages = []
      ownersModel.findOwner(param.ownerId)
      next(() =>
        render(
          OwnerDetailPage({
            messages: ownersModel.messages,
            owner: ownersModel.owner
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/edit', (param, next) => {
      ownersModel.messages = []
      ownersModel.findOwner(param.ownerId)
      ownersModel.initOwnerForm(ownersModel.owner)
      next(() =>
        render(
          OwnerEditPage({
            emit: emitter.emit,
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.ownerForm
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/pets/new', (param, next) => {
      ownersModel.messages = []
      ownersModel.loadPetTypes()
      ownersModel.findOwner(param.ownerId)
      ownersModel.initPetForm(param.ownerId)
      next(() =>
        render(
          PetEditPage({
            emit: emitter.emit,
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.petForm,
            owner: ownersModel.owner,
            petTypes: ownersModel.petTypes
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/pets/:petId/edit', (param, next) => {
      ownersModel.messages = []
      ownersModel.loadPetTypes()
      ownersModel.findPet(param.ownerId, param.petId)
      ownersModel.initPetForm(param.ownerId, ownersModel.pet)
      next(() =>
        render(
          PetEditPage({
            emit: emitter.emit,
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.petForm,
            owner: ownersModel.owner,
            petTypes: ownersModel.petTypes
          }),
          router.path
        )
      )
    })
    .route('#/owners/:ownerId/pets/:petId/visits/new', (param, next) => {
      ownersModel.messages = []
      ownersModel.findPet(param.ownerId, param.petId)
      ownersModel.initVisitForm(param.ownerId, param.petId)
      next(() =>
        render(
          VisitEditPage({
            emit: emitter.emit,
            messages: ownersModel.messages,
            errors: ownersModel.errors,
            form: ownersModel.visitForm,
            owner: ownersModel.owner,
            pet: ownersModel.pet
          }),
          router.path
        )
      )
    })
    .route(
      '#/owners/:ownerId/pets/:petId/visits/:visitId/edit',
      (param, next) => {
        ownersModel.messages = []
        ownersModel.findVisit(param.ownerId, param.petId, param.visitId)
        ownersModel.initVisitForm(param.ownerId, param.petId, ownersModel.visit)
        next(() =>
          render(
            VisitEditPage({
              emit: emitter.emit,
              messages: ownersModel.messages,
              errors: ownersModel.errors,
              form: ownersModel.visitForm,
              owner: ownersModel.owner,
              pet: ownersModel.pet
            }),
            router.path
          )
        )
      }
    )
    .route('*', () => router.redirect('#/home'))

  ownersModel.load()
  router.start()
}

export default start
