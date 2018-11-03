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

const VETS = [
  {
    name: 'James Carter',
    specialties: []
  },
  {
    name: 'Helen Leary',
    specialties: [{ id: '1', name: 'Radiology' }]
  },
  {
    name: 'Linda Douglas',
    specialties: [{ id: '2', name: 'Surgery' }, { id: '3', name: 'Dentistry' }]
  },
  {
    name: 'Henry Stevens',
    specialties: [{ id: '2', name: 'Surgery' }]
  },
  {
    name: 'Sharon Jenkins',
    specialties: [{ id: '1', name: 'Radiology' }]
  }
]

function createModel() {
  const model = {
    messages: [],
    errors: {},
    petTypes: [],
    vets: [],
    owners: [],
    filteredOwners: [],
    ownersSearchForm: null,
    owner: null,
    ownerForm: null,
    pet: null,
    petForm: null,
    visitForm: null,
    load() {
      model.petTypes = PET_TYPES
      model.owners = JSON.parse(storage.getItem(STORAGE_KEY) || '[]')
    },
    save() {
      storage.setItem(STORAGE_KEY, JSON.stringify(model.owners))
    },
    searchVets() {
      model.vets = VETS
    },
    initOwnersSearchForm() {
      model.errors = {}
      model.ownersSearchForm = { filter: '' }
    },
    setOwnersSearchForm(name, value) {
      model.ownersSearchForm[name] = value
    },
    searchOwners() {
      if (model.ownersSearchForm && model.ownersSearchForm.filter) {
        model.filteredOwners = model.owners.filter(o =>
          o.name.startsWith(model.ownersSearchForm.filter)
        )
      } else {
        model.filteredOwners = model.owners
      }
    },
    findOwner(ownerId) {
      model.owner = findById(model.owners, ownerId)
    },
    findPet(ownerId, petId) {
      model.findOwner(ownerId)
      model.pet = model.owner == null ? null : findById(model.owner.pets, petId)
    },
    findVisit(ownerId, petId, visitId) {
      model.findPet(ownerId, petId)
      model.visit =
        model.pet == null ? null : findById(model.pet.visits, visitId)
    },
    initOwnerForm(owner) {
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
    setOwnerForm(name, value) {
      model.ownerForm[name] = value
      validateOwnerForm(model, name)
    },
    postOwnerForm() {
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
          model.messages.push('Owner now found.')
          return null
        }
      }
    },
    initPetForm(pet) {
      model.errors = {}
      if (pet) {
        model.petForm = {
          id: pet.id,
          name: pet.name,
          birthDate: pet.birthDate,
          typeId: pet.typeId
        }
      } else {
        model.petForm = { isNew: true }
      }
    },
    setPetForm(name, value) {
      model.petForm[name] = value
      validatePetForm(model, name)
    },
    postPetForm() {
      if (model.owner) {
        if (!validatePetForm(model)) {
          return null
        }
        const type = findById(PET_TYPES, model.petForm.typeId)
        const typeName = type ? type.name : null
        if (model.petForm.isNew) {
          const newId = '' + Date.now()
          const newPet = {
            id: newId,
            name: model.petForm.name,
            birthDate: model.petForm.birthDate,
            typeId: model.petForm.typeId,
            typeName: typeName,
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
            old.typeId = model.petForm.typeId
            old.typeName = typeName
            model.save()
            return model.owner.id
          } else {
            model.messages.push('Pet now found.')
            return null
          }
        }
      } else {
        model.messages.push('Owner now found.')
        return null
      }
    },
    initVisitForm(visit) {
      model.errors = {}
      if (visit) {
        model.visitForm = {
          id: visit.id,
          visitDate: visit.visitDate,
          description: visit.description
        }
      } else {
        model.visitForm = { isNew: true }
      }
    },
    setVisitForm(name, value) {
      model.visitForm[name] = value
      validateVisitForm(model, name)
    },
    postVisitForm() {
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
            model.messages.push('Visit now found.')
            return null
          }
        }
      } else {
        model.messages.push('Pet now found.')
        return null
      }
    }
  }
  return model
}

function validateOwnerForm(model, name) {
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

function validatePetForm(model, name) {
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

function validateVisitForm(model, name) {
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

function findById(items, id) {
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i]
    if (item.id === id) {
      return item
    }
  }
  return null
}

export default createModel
