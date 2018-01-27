'use strict';

const solution = require('../lib/solution');
const Stack = require('../lib/stack')
require('jest');

let testString = '{Spicy} jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';
let testStringInvalid1 = '{Spicy jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';
let testStringInvalid2 = 'Spicy} jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';


describe('Solution Module', function() {
  describe('#Two Largest', function() {

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
    

  describe('#Binary Search', function() {
    let testArray = []
    let kk = 10000000;
    for (let i = 0; i < kk; i++) testArray.push(i);
    
    let sampleValidResult = {value: 22013, index: 22013}
    it('should take in a valid input and return an object', function() {
        expect(solution.binarySearch(testArray, 22013)).toEqual(`{value: ${22013}, index: ${22013}}`);
    });

    it('should return null when a string is put into the n parameter in the function', function() {
      expect(solution.binarySearch(testArray, '22013')).toEqual(null);
  });

  it('should return null when an empty array is passed into the arr parameter in the function', function() {
    expect(solution.binarySearch([], 22013)).toEqual(null);
  });
  });
  });
