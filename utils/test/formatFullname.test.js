const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;


describe('formatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(function() {}, 20)).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg have not 2 words', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
  });

  it('should change first letter to upper case, others to lower case', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('JoHn DoE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });

});