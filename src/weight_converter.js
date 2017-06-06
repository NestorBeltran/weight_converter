
const aux = 2.20462;

export function kilosToPounds(...kilos) {
  let result = kilos.map(function (kilo) {
    let pounds = kilo * aux;
    return parseFloat(pounds.toFixed(2));
  });

  if (result.length == 1) {
    result = result[0];
  }

  return result;
}

export function poundsToKilos(...pounds) {
  let result = pounds.map(function (pound) {
    let kilos = pound / aux;
    return parseFloat(kilos.toFixed(2));
  });

  if (result.length == 1) {
    result = result[0];
  }

  return result;
}
