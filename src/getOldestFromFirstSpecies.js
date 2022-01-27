const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // pair programming com Sheila Nakashima
  const caringPerson = data.employees
    .filter((employee) => employee.id === id)
    .map((animal) => animal.responsibleFor[0]);
  const findOlder = data.species.find((name) => name.id === caringPerson[0])
    .residents.sort((one, two) => two.age - one.age)
    .map((resident) => [resident.name, resident.sex, resident.age])[0];

  return findOlder;
}

module.exports = getOldestFromFirstSpecies;
