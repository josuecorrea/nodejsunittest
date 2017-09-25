const calcModule = require('./../calc');
const chai = require('chai');
const expect = chai.expect;

describe('calc test', function(){
    it('shoul sum return 4', (done)=>{
        var result = calcModule.sum(2,2);
        expect(result).to.equal(4);
        done();
    });
});