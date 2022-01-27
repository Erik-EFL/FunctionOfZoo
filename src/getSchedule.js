const { hours, species } = require('../data/zoo_data');

const week = Object.keys(hours);
const arca = species.reduce((acc, animal) => {
  acc.push(animal.name);
  return acc;
}, []);

console.log(arca);
console.log(week);
/* function getSchedule(scheduleTarget) {

}

module.exports = getSchedule; */
