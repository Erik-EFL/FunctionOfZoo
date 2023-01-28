const { species } = require('../data/zoo_data');

const getAnimalNames = ({ sex }, residents) => residents.reduce((arca, animal) => {
  if (sex === animal.sex || !sex) arca.push(animal.name);
  return arca;
}, []);

const getAnimalMap = (options = { includeNames: false, sorted: false, sex: false }) => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const listAnimal = getAnimalNames(options, residents);
      if (options.sorted) listAnimal.sort();
      map[location].push({ [name]: listAnimal });
    } else {
      map[location].push(name);
    }
  });
  return map;
};

module.exports = getAnimalMap;
