import DecoratorsClass from './class.js';
import MyClass from './field.js';
import MyMethod from './method.js';

console.log(new MyClass().x);
console.log(new MyMethod().add(1, 1));

const decoratorClass = new DecoratorsClass('test');
console.log(decoratorClass);
