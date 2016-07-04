var assert = require('assert');


function stringToArray(str){
	return str.split(',');
}
function factorial(n){
	if(n == 0 || n == 1){
		return 1;
	} 
	return factorial(n-1) * n;
}


describe('factorialTester', function(){
	it('should return 1 when n is 0', function(){
		assert.equal(factorial(0), 1);
	})
	it('should return 1 when n is 1', function(){
		assert.equal(factorial(1), 1);
	})
	it('should return 120 when n is 5', function(){
		assert.equal(factorial(5), 120);
	})
})

describe('stringToArrayTester', function(){
	var str = 'a,b,c';
	it('should return an array',function(){
		assert(Array.isArray(stringToArray(str)));
	})
}) 