const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find((employ) =>
    (employ.firstName === employeeName)
    || (employ.lastName === employeeName));
}

module.exports = getEmployeeByName;
