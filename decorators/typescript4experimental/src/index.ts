import chalk from 'chalk';

// Classes
import { ClassFloorCase } from './classes/floor.js';
import { ClassUppercaseCase } from './classes/uppercase.js';

// Methods
import { MethodLoggerCase } from './methods/logger.js';

// Parameters
import { ParametersLoggerCase } from './parameters/logger.js';
import { PropertyObservableCase } from './properties/observable.js';

// Properties

/* eslint-disable no-console */
console.log(chalk.cyan('- All class loaded.'));

// Classes instances

console.log(chalk.yellow('-- Run class.'));
const classUppercaseCase = new ClassUppercaseCase('My name', 'My city');
console.log(classUppercaseCase.displayInfo());

const classFloorcase = new ClassFloorCase('My name', 'My city', 12.34, 95.937);
console.log(classFloorcase.getAmount(), classFloorcase.getRatio());

// Methods instances
console.log(chalk.yellow('-- Run methods.'));
const methodLoggerCase = new MethodLoggerCase('My Name');
methodLoggerCase.greet();

// Parameters instances

console.log(chalk.yellow('-- Run parameters.'));
const parametersLoggerCase = new ParametersLoggerCase();
parametersLoggerCase.exampleMethod('My example', 40);

// Properties instances
console.log(chalk.yellow('-- Run properties.'));
const c = new PropertyObservableCase();

/** @ts-expect-error Field do not exists */
c.onFooChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`));
/** @ts-expect-error Field do not exists */
c.onBarChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`));

c.foo = 100; // -> prev: -1, next: 100
c.foo = -3.14; // -> prev: 100, next: -3.14
c.bar = 'baz'; // -> prev: bar, next: baz
c.bar = 'sing'; // -> prev: baz, next: sing
c.bar = 'lets see';
