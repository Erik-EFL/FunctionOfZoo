const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // pair programming com Sheila Nakashima
  const caringPerson = data.employees
    .find((employee) => employee.id === id)
    .map((animal) => animal.responsibleFor[0]);
  const findOlder = data.species
    .find((name) => name.id === caringPerson[0])
    .residents.sort((one, two) => one.age - two.age)
    .map((resident) => [resident.name, resident.sex, resident.age]);

  return findOlder;
}

module.exports = getOldestFromFirstSpecies;
