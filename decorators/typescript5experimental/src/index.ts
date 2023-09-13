// classes
import { ClassFloorCase } from './classes/floor.js';
import { ClassUppercaseCase } from './classes/uppercase.js';

// methods
import { MethodLoggerCase } from './methods/logger.js';
// legacy
import MyClass from './field.js';
import MyMethod from './method.js';

console.log(new MyClass().x);
console.log(new MyMethod().add(1, 1));

// Classes instances
const classUppercaseCase = new ClassUppercaseCase('My name', 'My city');
console.log(classUppercaseCase.displayInfo());

const classFloorcase = new ClassFloorCase('My name', 'My city', 12.34, 95.937);
console.log(classFloorcase.getAmount(), classFloorcase.getRatio());

// Methods instances

const methodLoggerCase = new MethodLoggerCase('My Name');
methodLoggerCase.greet();
