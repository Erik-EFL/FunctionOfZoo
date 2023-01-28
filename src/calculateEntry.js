const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalPayers = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age >= 50) {
      totalPayers.senior += 1;
      return;
    }
    if (element.age >= 18) {
      totalPayers.adult += 1;
      return;
    }
    totalPayers.child += 1;
  });
  return totalPayers;
}

function calculateEntry(entrants) {
  let total = 0;
  if (!entrants || !entrants.length) return 0;
  const totalPayers = countEntrants(entrants);
  Object.keys(totalPayers).forEach((element) => {
    total += totalPayers[element] * prices[element];
  });
  return total;
}

module.exports = { calculateEntry, countEntrants };
