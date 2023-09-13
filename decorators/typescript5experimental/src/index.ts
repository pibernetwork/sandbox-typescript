// classes
import { ClassFloorCase } from './classes/floor.js';
import { ClassUppercaseCase } from './classes/uppercase.js';

// methods
import { MethodLoggerCase } from './methods/logger.js';

// parameters
import { ParametersLoggerCase } from './parameters/logger.js';

// legacy
import MyClass from './field.js';

console.log(new MyClass().x);

// Classes instances
const classUppercaseCase = new ClassUppercaseCase('My name', 'My city');
console.log(classUppercaseCase.displayInfo());

const classFloorcase = new ClassFloorCase('My name', 'My city', 12.34, 95.937);
console.log(classFloorcase.getAmount(), classFloorcase.getRatio());

// Methods instances
const methodLoggerCase = new MethodLoggerCase('My Name');
methodLoggerCase.greet();

// Parameters
const parametersLoggerCase = new ParametersLoggerCase();
parametersLoggerCase.exampleMethod('My example', 40);
