const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  let isOlderThan = false;
  species.forEach((specie) => {
    if (specie.name === animal) {
      const { residents } = specie;
      isOlderThan = residents.every((resident) => resident.age >= age);
    }
  });
  return isOlderThan;
}

module.exports = getAnimalsOlderThan;
