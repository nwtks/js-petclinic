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
    vets: [],
    searchVets() {
      model.vets = VETS
    }
  }
  return model
}

export default createModel
