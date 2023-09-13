import { ClassFloorCase } from './classes/floor.js';
import { ClassUppercaseCase } from './classes/uppercase.js';
import MyClass from './field.js';
import MyMethod from './method.js';

console.log(new MyClass().x);
console.log(new MyMethod().add(1, 1));

const classUppercaseCase = new ClassUppercaseCase('My name', 'My city');
console.log(classUppercaseCase.displayInfo());

const classFloorcase = new ClassFloorCase('My name', 'My city', 12.34, 95.937);
console.log(classFloorcase.getAmount(), classFloorcase.getRatio());
