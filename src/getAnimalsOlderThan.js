const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let isOlderThan = false;
  // Gabriel Melo me explicou como acessar objetos com forEach
  data.species.forEach((specie) => {
    if (specie.name === animal) {
      const { residents } = specie;
      isOlderThan = residents.every((resident) => resident.age >= age);
    }
  });
  return isOlderThan;
}

module.exports = getAnimalsOlderThan;
