const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) =>
  employees.some((employ) => employ.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const managed = [];
  if (isManager(managerId)) {
    employees.forEach((employ) => {
      if (employ.managers.includes(managerId)) {
        managed.push(`${employ.firstName} ${employ.lastName}`);
      }
      return managed;
    });
    return managed;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
