const data = require('../data/zoo_data');

function getEmployeesCoverage(options = { firstName: '', lastName: '', id: '' }) {
  const { employees, species } = data;
  const { firstName, lastName, id } = options;
  const employee = employees.find((employ) => {
    if (firstName) return employ.firstName === firstName;
    if (lastName) return employ.lastName === lastName;
    if (id) return employ.id === id;
    return employ;
  });

  const { responsibleFor } = employee;
  const animals = responsibleFor.map((animalId) => species.find((specie) => specie.id === animalId));
}

module.exports = getEmployeesCoverage;
