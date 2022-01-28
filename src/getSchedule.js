const { hours, species } = require('../data/zoo_data');

const arca = species.reduce((accumulator, animal) => {
  accumulator.push(animal.name);
  return accumulator;
}, []);

const getAnimalDay = (day) => {
  const filterAnimal = species.filter((present) => present.availability.includes(day));
  return filterAnimal.reduce((accumulator, animal) => {
    accumulator.push(animal.name);
    return accumulator;
  }, []);
};

const operation = () => Object.keys(hours).reduce((accumulator, day) => {
  if (day === 'Monday') {
    accumulator[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    accumulator[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getAnimalDay(day),
    };
  }
  return accumulator;
}, {});

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).includes(scheduleTarget)) {
    const listObject = {};
    listObject[scheduleTarget] = operation()[scheduleTarget];
    return listObject;
  }
  if (arca.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return operation();
}

module.exports = getSchedule;

// console.log(arca.length);
// console.log(aval);
