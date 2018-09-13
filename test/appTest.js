const assert =require('chai').assert;
const app = require('../app');

sayResults = app.sayHello();
addResults = app.addNumbers(5,3);


describe('App',function () {

    describe('sayHello()', function () {

        it('app should return hello', function () {
            assert.equal(sayResults, 'hello');
        });

        it('say hello should return a string', function () {
            assert.typeOf(sayResults, 'string');
        });
    });
    describe('AddNumbers', function () {

        it('addNumbers should add two numbers ', function () {
        assert.isAbove(addResults, 7);
        });

        it('addNumbers should return a number', function () {
            assert.typeOf(addResults, 'number');
        });
    });
});
