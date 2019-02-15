var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  xit('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should add numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    actual = calculator.runningTotal;
    assert.equal(actual, 5)
  });

  it('it should subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    actual = calculator.runningTotal;
    assert.equal(actual, 3)
  });

  it('it should multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    actual = calculator.runningTotal;
    assert.equal(actual, 15)
  })

  it('it should divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(3);
    calculator.numberClick(3);

    actual = calculator.runningTotal;
    assert.equal(actual, 433)
  })

  it('it should chain multiple operations together', function(){
    calculator.runningTotal = 2;
    calculator.operatorClick('+')
    calculator.runningTotal = 5
    calculator.operatorClick('=');
    actual = calculator.newTotal;
    assert.equal(actual, true)
  })

  xit('it should clear the running total without affecting the calculation', function(){

  })
  // - `calculator.clearClick()` - clear the running total without affecting the calculation
});
