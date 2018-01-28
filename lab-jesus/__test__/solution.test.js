'use strict';

const solution = require('../lib/solution');
const Stack = require('../lib/stack')
require('jest');

let testString = '{Spicy} jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';
let testStringInvalid1 = '{Spicy jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';
let testStringInvalid2 = 'Spicy} jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';


describe('Solution Module', function() {
  describe('#stack', function() {

    it('should take in a created SLL and return the correct value from the end', function() {
      expect(solution.curlyString(testString)).toEqual('valid');
    });
    it('should take in an invalid string with an open bracket that doesnt have an close bracket', function() {
      expect(solution.curlyString(testStringInvalid1)).toEqual('invalid string');
    });
    it('should take in an invalid string with a closed bracket that doesnt have an opening bracket', function() {
      expect(solution.curlyString(testStringInvalid2)).toEqual('nothing in que to remove' );
    });
    

  });
    

  describe('#queue', function() {
    let testArray = [0,1,2,3,4,5,6,7,8,9,10]    
    it('should take in a valid input and return an object with the correct answer', function() {
        expect(solution.queueBuilder(testArray, 9)).toEqual({"count": 10, "lowestCount": 9, "storage": {"9": 10}});
    });
    it('should take another valid input and return the correct answer', function() {
    expect(solution.queueBuilder(testArray, 10)).toEqual({"count": 10, "lowestCount": 10, "storage": {}});
    });
    it('should return an error if the ', function() {
      expect(solution.queueBuilder(testArray, -1)).toEqual('ERROR: Does not compute');
    });
    it('should return an error if the input is not an array ', function() {
      expect(solution.queueBuilder('testArray', 1)).toEqual('ERROR: Does not compute');
    });
  });
  });
