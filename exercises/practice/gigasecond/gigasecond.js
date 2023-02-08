//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function gigasecond(date) {
  return new Date(date.getTime() + 10 ** 9 * 1000);
}

const date = new Date("2000-01-01");
console.log(gigasecond(date));
