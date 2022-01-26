const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalObject = {};
    data.species.forEach((specie) => {
      animalObject[`${specie.name}`] = specie.residents.length;
    });
    return animalObject;
  }
  let countAnimal;
  data.species.forEach((specie) => {
    if ((specie.name === animal.specie) && (animal.sex)) {
      countAnimal = (specie.residents.filter((bicho) => bicho.sex === animal.sex)).length;
    } else if (specie.name === animal.specie) {
      countAnimal = specie.residents.length;
    }
  });
  return countAnimal;
}

module.exports = countAnimals;
