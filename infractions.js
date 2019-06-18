/*
Refactor the provided method, getMostRecentInfractionsForVehicle,
using functional programming paradigms.
*/

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
];
function getMostRecentInfractionForVehicle(plate) {
  const infractionsByCar = [];
  for (let i = 0; i < infractions.length; i++) {
    if (infractions[i].plate === plate) {
      infractionsByCar.push(infractions[i]);
    }
  }

  if (infractionsByCar.length > 0) {
    const sorted = infractionsByCar.sort((a, b) => {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return -1;
      } if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return 1;
      }
      return 0;
    });
    return sorted[0];
  }
  return undefined;
}
process.stdin.on('data', (text) => {
  input += text;
});

process.stdin.on('end', () => {
  // do your processing here.
  const result = getMostRecentInfractionForVehicle(input);
  console.log(JSON.stringify(result));
});
// Edit above at your own risk


// TODO: Refactor this function to use functional programming paradigms
