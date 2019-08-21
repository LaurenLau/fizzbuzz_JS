
describe ('FizzBuzz', function() {
  
  var fizzBuzz;

  beforeEach(function() {
  fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('it returns fizz for multiples of 3', function() {
      expect(fizzBuzz.says(3)).toEqual('Fizz');
      expect(fizzBuzz.says(9)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('it returns buzz for multiples of 5', function() {
      expect(fizzBuzz.says(5)).toEqual('Buzz');
      expect(fizzBuzz.says(25)).toEqual('Buzz');
    });  
  });

  describe('multiples of 3 and 5', function() {
    it('it returns fizzbuzz for multiples of 3 and 5', function() {
      expect(fizzBuzz.says(15)).toEqual('Fizzbuzz');
      expect(fizzBuzz.says(75)).toEqual('Fizzbuzz');
    });
  });

  describe('all other numbers', function() {
    it('it returns the current number', function() {
      expect(fizzBuzz.says(1)).toEqual(1);
      expect(fizzBuzz.says(11)).toEqual(11);
    });
  });

});

  
