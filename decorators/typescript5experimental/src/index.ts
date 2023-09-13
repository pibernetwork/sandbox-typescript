import { ClassDecorator } from './class.js';
import MyClass from './field.js';
import MyMethod from './method.js';

console.log(new MyClass().x);
console.log(new MyMethod().add(1, 1));

const decoratorClass = new ClassDecorator('test');
console.log(decoratorClass);

class ChildClass extends ClassDecorator {}

const childclass = new ChildClass('test');

console.log(childclass);
