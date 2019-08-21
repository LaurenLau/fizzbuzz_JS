
describe ('Fizzbuzz', function() {
  
  var fizzbuzz;

  beforeEach( function() {
  fizzbuzz = new Fizzbuzz();
  });
  
  it('it returns fizz for multiples of 3', function() {
    expect(fizzbuzz(3)).toEqual(3);
    expect(fizzbuzz(9)).toEqual(9);
  });

  it('it returns fizz for multiples of 5', function() {
    expect(fizzbuzz(5)).toEqual(5);
    expect(fizzbuzz(5)).toEqual(5);
  });  
  
  it('it returns fizz for multiples of 3 and 5', function() {
    expect(fizzbuzz(45)).toEqual(45);
    expect(fizzbuzz(60)).toEqual(60);
  });

});



