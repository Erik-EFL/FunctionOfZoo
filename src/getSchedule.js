const { hours, species } = require('../data/zoo_data');

const arca = species.reduce((accumulator, animal) => {
  accumulator.push(animal.name);
  return accumulator;
}, []);
const getAnimalDay = (day) => {
  // Verifica e filtra se nos dias de aprestação dos animais tem também os dias da semana
  const filterAnimal = species.filter((present) => present.availability.includes(day));
  // Monta um array com os dias de apresentação e os animais que estão presentes naquele dia
  return filterAnimal.reduce((accumulator, animal) => {
    accumulator.push(animal.name);
    return accumulator;
  }, []);
};
const operation = () => Object.keys(hours).reduce((accumulator, day) => {
  if (day === 'Monday') {
    accumulator[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    accumulator[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getAnimalDay(day),
    };
  }
  return accumulator;
}, {});
const getSchedule = (scheduleTarget) => {
  // Retorna todos os dias de apresentação caso o paramento esteja vazio
  if (Object.keys(hours).includes(scheduleTarget)) {
    const listObject = {};
    listObject[scheduleTarget] = operation()[scheduleTarget];
    return listObject;
  }
  // Retorna o animal especifico e seus dias de apresentação.
  if (arca.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return operation();
};
module.exports = getSchedule;
