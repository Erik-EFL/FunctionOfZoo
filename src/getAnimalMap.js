const { species } = require('../data/zoo_data');

//  pega o nome dos animais por sexo quando assim definido no parâmetro!
const getNames = (parameter, residents) => residents.reduce((arca, animal) => {
  if (parameter.sex === animal.sex || !parameter.sex) arca.push(animal.name);
  return arca;
}, []);

// passando informações base para o parâmetro options, false para diminuir o tamanho do código.
const getAnimalMap = (options = { includeNames: false, sorted: false, sex: false }) => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  // Faz um loop pelas informações parâmetro para verificar nome e sexo
  // contidos no parâmetro options
  species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const listAnimal = getNames(options, residents); // chama a function para poder filtrar os resultados
      if (options.sorted) listAnimal.sort();
      map[location].push({ [name]: listAnimal });
    } else {
      map[location].push(name);
    }
  });
  return map;
};

module.exports = getAnimalMap;
