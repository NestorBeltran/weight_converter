const expect = require('chai').expect;
const kilosToPounds = require('..').kilosToPounds;
const poundsToKilos = require('..').poundsToKilos;

describe('#weight_converter', function () {
  it('converitir kilos a libras un solo numero',function () {
    const conversion = kilosToPounds(1);
    expect(conversion).to.equal(2.20)
  })
  it('converitir libras a kilos un solo numero',function () {
    const conversion = poundsToKilos(1);
    expect(conversion).to.equal(0.45)
  })
  it('converitir kilos a libras varios numero',function () {
    const conversion = kilosToPounds(1,2,3,4,5);
    let aux = [2.20,4.40,6.61,8.81,11.02];
    conversion.forEach(function (el, index) {
      expect(el).to.equals(aux[index]);
    });
  })
  it('converitir libras a kilos varios numeros',function () {
    const conversion = poundsToKilos(1);
    let aux = [0.45,0.90,1.36,1.81,2.26];
    conversion.forEach(function (el,index) {
      expect(el).to.equals(aux[index]);
    });
  })
})
