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
    initVisitForm() {
      model.errors = {}
      model.visitForm = { isNew: true }
    },
    setVisitForm(name, value) {
      model.visitForm[name] = value
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
        }
      } else {
        model.messages.push('Pet now found.')
        return null
      }
    }
  }
  return model
}

function validateOwnerForm(model) {
  let valid = true
  if (!model.ownerForm.name || !model.ownerForm.name.length) {
    model.errors.name = 'Please provide a name.'
    valid = false
  } else {
    delete model.errors.name
  }
  if (!model.ownerForm.address || !model.ownerForm.address.length) {
    model.errors.address = 'Please provide a address.'
    valid = false
  } else {
    delete model.errors.address
  }
  if (!model.ownerForm.telephone || !model.ownerForm.telephone.length) {
    model.errors.telephone = 'Please provide a telephone.'
    valid = false
  } else {
    delete model.errors.telephone
  }
  return valid
}

function validatePetForm(model) {
  let valid = true
  if (!model.petForm.name || !model.petForm.name.length) {
    model.errors.name = 'Please provide a name.'
    valid = false
  } else {
    delete model.errors.name
  }
  delete model.errors.birthDate
  if (!model.petForm.typeId || !model.petForm.typeId.length) {
    model.errors.typeId = 'Please choose a type.'
    valid = false
  } else {
    delete model.errors.typeId
  }
  return valid
}

function validateVisitForm(model) {
  let valid = true
  if (!model.visitForm.visitDate || !model.visitForm.visitDate.length) {
    model.errors.visitDate = 'Please provide a visit date.'
    valid = false
  } else {
    delete model.errors.visitDate
  }
  delete model.errors.description
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
