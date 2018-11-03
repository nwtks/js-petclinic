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
      if (ownerId) {
        return router.redirect('#/owners/' + ownerId)
      }
      router.render()
    })
    .on('setOwnerForm', param => {
      model.messages = []
      model.setOwnerForm(param.name, param.value)
      router.render()
    })
    .on('postPetForm', () => {
      model.messages = []
      const ownerId = model.postPetForm()
      if (ownerId) {
        return router.redirect('#/owners/' + ownerId)
      }
      router.render()
    })
    .on('setPetForm', param => {
      model.messages = []
      model.setPetForm(param.name, param.value)
      router.render()
    })
    .on('postVisitForm', () => {
      model.messages = []
      const ownerId = model.postVisitForm()
      if (ownerId) {
        return router.redirect('#/owners/' + ownerId)
      }
      router.render()
    })
    .on('setVisitForm', param => {
      model.messages = []
      model.setVisitForm(param.name, param.value)
      router.render()
    })

  router
    .route('#/home', () => {
      model.messages = []
      return () =>
        render(
          WelcomePage({
            messages: model.messages
          }),
          router.path
        )
    })
    .route('#/vets', () => {
      model.messages = []
      model.searchVets()
      return () =>
        render(
          VetsPage({
            messages: model.messages,
            vets: model.vets
          }),
          router.path
        )
    })
    .route('#/owners', () => {
      model.messages = []
      model.ownersSearchForm = { filter: '' }
      model.searchOwners()
      return () =>
        render(
          OwnersPage({
            emitter: emitter,
            messages: model.messages,
            ownersSearchForm: model.ownersSearchForm,
            owners: model.filteredOwners
          }),
          router.path
        )
    })
    .route('#/owners/new', () => {
      model.messages = []
      model.initOwnerForm()
      return () =>
        render(
          OwnerEditPage({
            emitter: emitter,
            messages: model.messages,
            ownerForm: model.ownerForm
          }),
          router.path
        )
    })
    .route('#/owners/:ownerId', param => {
      model.messages = []
      model.findOwner(param.ownerId)
      if (!model.owner) {
        model.messages.push('Owner now found.')
      }
      return () =>
        render(
          OwnerDetailPage({
            messages: model.messages,
            owner: model.owner
          }),
          router.path
        )
    })
    .route('#/owners/:ownerId/edit', param => {
      model.messages = []
      model.findOwner(param.ownerId)
      if (!model.owner) {
        model.messages.push('Owner now found.')
      }
      model.initOwnerForm(model.owner)
      return () =>
        render(
          OwnerEditPage({
            emitter: emitter,
            messages: model.messages,
            ownerForm: model.ownerForm,
            owner: model.owner
          }),
          router.path
        )
    })
    .route('#/owners/:ownerId/pets/new', param => {
      model.messages = []
      model.findOwner(param.ownerId)
      if (!model.owner) {
        model.messages.push('Owner now found.')
      }
      model.initPetForm()
      return () =>
        render(
          PetEditPage({
            emitter: emitter,
            messages: model.messages,
            petForm: model.petForm,
            owner: model.owner,
            petTypes: model.petTypes
          }),
          router.path
        )
    })
    .route('#/owners/:ownerId/pets/:petId/edit', param => {
      model.messages = []
      model.findPet(param.ownerId, param.petId)
      if (!model.pet) {
        model.messages.push('Pet now found.')
      }
      model.initPetForm(model.pet)
      return () =>
        render(
          PetEditPage({
            emitter: emitter,
            messages: model.messages,
            petForm: model.petForm,
            owner: model.owner,
            pet: model.pet,
            petTypes: model.petTypes
          }),
          router.path
        )
    })
    .route('#/owners/:ownerId/pets/:petId/visits/new', param => {
      model.messages = []
      model.findPet(param.ownerId, param.petId)
      if (!model.pet) {
        model.messages.push('Pet now found.')
      }
      model.initVisitForm()
      return () =>
        render(
          VisitEditPage({
            emitter: emitter,
            messages: model.messages,
            visitForm: model.visitForm,
            owner: model.owner,
            pet: model.pet
          }),
          router.path
        )
    })
    .route('*', () => router.redirect('#/home'))

  model.load()
  router.start()
}

export default start
