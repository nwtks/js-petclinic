import { findById } from '../util'

const storage = window.localStorage
const STORAGE_KEY = 'js-petclinic'

const PET_TYPES = [
  { id: '1', name: 'Cat' },
  { id: '2', name: 'Dog' },
  { id: '3', name: 'Lizard' },
  { id: '4', name: 'Snake' },
  { id: '5', name: 'Bird' },
  { id: '6', name: 'Hamster' }
]

const createModel = () => {
  const model = {
    messages: [],
    errors: {},
    petTypes: [],
    owners: [],
    filteredOwners: [],
    ownersSearchForm: null,
    owner: null,
    ownerForm: null,
    pet: null,
    petForm: null,
    visit: null,
    visitForm: null,
    load: () =>
      (model.owners = JSON.parse(storage.getItem(STORAGE_KEY) || '[]')),
    save: () => storage.setItem(STORAGE_KEY, JSON.stringify(model.owners)),
    loadPetTypes: () => (model.petTypes = PET_TYPES),
    initOwnersSearchForm: () => {
      model.errors = {}
      model.ownersSearchForm = { filter: '' }
    },
    inputOwnersSearchForm: (name, value) =>
      (model.ownersSearchForm[name] = value),
    searchOwners: () => {
      if (model.ownersSearchForm && model.ownersSearchForm.filter) {
        const filter = model.ownersSearchForm.filter
        model.filteredOwners = model.owners.filter(
          o => o.name.substr(0, filter.length) === filter
        )
      } else {
        model.filteredOwners = model.owners
      }
    },
    findOwner: ownerId => {
      model.owner = findById(model.owners, ownerId)
      if (!model.owner) {
        model.messages.push('Owner not found.')
      }
    },
    findPet: (ownerId, petId) => {
      model.findOwner(ownerId)
      if (!model.owner) {
        model.pet = null
        return
      }
      model.pet = findById(model.owner.pets, petId)
      if (!model.pet) {
        model.messages.push('Pet not found.')
      }
    },
    findVisit: (ownerId, petId, visitId) => {
      model.findPet(ownerId, petId)
      if (!model.pet) {
        model.visit = null
        return
      }
      model.visit = findById(model.pet.visits, visitId)
      if (!model.visit) {
        model.messages.push('Visit not found.')
      }
    },
    initOwnerForm: owner => {
      model.errors = {}
      if (owner) {
        model.ownerForm = {
          id: owner.id,
          name: owner.name,
          address: owner.address,
          telephone: owner.telephone
        }
      } else {
        model.ownerForm = { isNew: true }
      }
    },
    inputOwnerForm: (name, value) => (model.ownerForm[name] = value),
    setOwnerForm: (name, value) => {
      model.ownerForm[name] = value
      validateOwnerForm(model, name)
    },
    postOwnerForm: () => {
      if (!validateOwnerForm(model)) {
        return null
      }
      if (model.ownerForm.isNew) {
        const newId = '' + Date.now()
        const newOwner = {
          id: newId,
          name: model.ownerForm.name,
          address: model.ownerForm.address,
          telephone: model.ownerForm.telephone,
          pets: []
        }
        model.owners.push(newOwner)
        model.save()
        return newId
      } else {
        const old = findById(model.owners, model.ownerForm.id)
        if (old) {
          old.name = model.ownerForm.name
          old.address = model.ownerForm.address
          old.telephone = model.ownerForm.telephone
          model.save()
          return old.id
        } else {
          model.messages.push('Owner not found.')
          return null
        }
      }
    },
    initPetForm: (owerId, pet) => {
      model.errors = {}
      if (pet) {
        model.petForm = {
          id: pet.id,
          name: pet.name,
          birthDate: pet.birthDate,
          typeId: pet.type.id,
          owerId: owerId
        }
      } else {
        model.petForm = { isNew: true, owerId: owerId }
      }
    },
    inputPetForm: (name, value) => (model.petForm[name] = value),
    setPetForm: (name, value) => {
      model.petForm[name] = value
      validatePetForm(model, name)
    },
    postPetForm: () => {
      if (model.owner) {
        if (!validatePetForm(model)) {
          return null
        }
        const type = findById(PET_TYPES, model.petForm.typeId)
        if (model.petForm.isNew) {
          const newId = '' + Date.now()
          const newPet = {
            id: newId,
            name: model.petForm.name,
            birthDate: model.petForm.birthDate,
            type: type,
            visits: []
          }
          model.owner.pets.push(newPet)
          model.save()
          return model.owner.id
        } else {
          const old = findById(model.owner.pets, model.petForm.id)
          if (old) {
            old.name = model.petForm.name
            old.birthDate = model.petForm.birthDate
            old.type = type
            model.save()
            return model.owner.id
          } else {
            model.messages.push('Pet not found.')
            return null
          }
        }
      } else {
        model.messages.push('Owner not found.')
        return null
      }
    },
    initVisitForm: (owerId, petId, visit) => {
      model.errors = {}
      if (visit) {
        model.visitForm = {
          id: visit.id,
          visitDate: visit.visitDate,
          description: visit.description,
          owerId: owerId,
          petId: petId
        }
      } else {
        model.visitForm = { isNew: true, owerId: owerId, petId: petId }
      }
    },
    inputVisitForm: (name, value) => (model.visitForm[name] = value),
    setVisitForm: (name, value) => {
      model.visitForm[name] = value
      validateVisitForm(model, name)
    },
    postVisitForm: () => {
      if (model.owner && model.pet) {
        if (!validateVisitForm(model)) {
          return null
        }
        if (model.visitForm.isNew) {
          const newId = '' + Date.now()
          const newVisit = {
            id: newId,
            visitDate: model.visitForm.visitDate,
            description: model.visitForm.description
          }
          model.pet.visits.push(newVisit)
          model.save()
          return model.owner.id
        } else {
          const old = findById(model.pet.visits, model.visitForm.id)
          if (old) {
            old.visitDate = model.visitForm.visitDate
            old.description = model.visitForm.description
            model.save()
            return model.owner.id
          } else {
            model.messages.push('Visit not found.')
            return null
          }
        }
      } else {
        model.messages.push('Pet not found.')
        return null
      }
    }
  }
  return model
}

const validateOwnerForm = (model, name) => {
  let valid = true
  if (!name || name === 'name') {
    if (!model.ownerForm.name || !model.ownerForm.name.length) {
      model.errors.name = 'Please provide a name.'
      valid = false
    } else {
      delete model.errors.name
    }
  }
  if (!name || name === 'address') {
    if (!model.ownerForm.address || !model.ownerForm.address.length) {
      model.errors.address = 'Please provide a address.'
      valid = false
    } else {
      delete model.errors.address
    }
  }
  if (!name || name === 'telephone') {
    if (!model.ownerForm.telephone || !model.ownerForm.telephone.length) {
      model.errors.telephone = 'Please provide a telephone.'
      valid = false
    } else if (!/^[0-9]{10,11}$/.test(model.ownerForm.telephone)) {
      model.errors.telephone = 'Please provide a valid telephone.'
      valid = false
    } else {
      delete model.errors.telephone
    }
  }
  return valid
}

const validatePetForm = (model, name) => {
  let valid = true
  if (!name || name === 'name') {
    if (!model.petForm.name || !model.petForm.name.length) {
      model.errors.name = 'Please provide a name.'
      valid = false
    } else {
      delete model.errors.name
    }
  }
  if (!name || name === 'birthDate') {
    if (!model.petForm.birthDate || !model.petForm.birthDate.length) {
      delete model.errors.birthDate
    } else if (!/^[0-9]{8}$/.test(model.petForm.birthDate)) {
      model.errors.birthDate = 'Please provide a valid birth date.'
      valid = false
    } else {
      delete model.errors.birthDate
    }
  }
  if (!name || name === 'typeId') {
    if (!model.petForm.typeId || !model.petForm.typeId.length) {
      model.errors.typeId = 'Please choose a type.'
      valid = false
    } else {
      delete model.errors.typeId
    }
  }
  return valid
}

const validateVisitForm = (model, name) => {
  let valid = true
  if (!name || name === 'visitDate') {
    if (!model.visitForm.visitDate || !model.visitForm.visitDate.length) {
      model.errors.visitDate = 'Please provide a visit date.'
      valid = false
    } else if (!/^[0-9]{8}$/.test(model.visitForm.visitDate)) {
      model.errors.visitDate = 'Please provide a valid visit date.'
      valid = false
    } else {
      delete model.errors.visitDate
    }
  }
  if (!name || name === 'description') {
    delete model.errors.description
  }
  return valid
}

export default createModel
