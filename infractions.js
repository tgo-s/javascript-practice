/*
Refactor the provided method, getMostRecentInfractionsForVehicle,
using functional programming paradigms.
*/
process.stdout.write('Infractions program. \n');
process.stdout.write('Please enter with a plate. Example: "ABCD 123" (whithout quotation marks). \n');
process.stdout.write('Press [Ctrl + D] at anytime to end program and see the results. \n');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
const infractions = [
  {
    plate: 'ABCD 123',
    date: '2014-12-24',
    type: 'speeding',
  },
  {
    plate: 'ABCD I23',
    date: '2015-02-15',
    type: 'failure.to.stop.at.stop.sign',
  },
  {
    plate: 'ABCD 123',
    date: '2016-04-14',
    type: 'operating.mobile.device',
  },
  {
    plate: 'ABCD I23',
    date: '2017-04-28',
    type: 'parking.at.restricted.area',
  },
  {
    plate: 'DCDE 456',
    date: '2018-06-16',
    type: 'seatbelt',
  },
];

function compareInfractionDates(infractionA, infractionB) {
  return new Date(infractionB.date).getTime() - new Date(infractionA.date).getTime();
}

function getMostRecentInfractionForVehicle(plate) {
  const infractionsByCar = infractions.filter(infraction => infraction.plate === plate);

  if (infractionsByCar.length > 0) {
    const sorted = infractionsByCar.sort(compareInfractionDates);
    return sorted[0];
  }
  return { msg: `Infraction not found for plate: ${plate}` };
}
function processInput(text) {
  const plates = text.split(',');
  const output = [];
  plates.forEach(plate => output.push(getMostRecentInfractionForVehicle(plate)));
  return output;
}

process.stdin.on('data', (text) => {
  input = !input || input === ''
    ? input += text.replace(/\r?\n|\r/g, '').trim()
    : input.concat(',', text.replace(/\r?\n|\r/g, '').trim());
});

process.stdin.on('end', () => {
  const result = processInput(input);
  console.log(JSON.stringify(result));
});
