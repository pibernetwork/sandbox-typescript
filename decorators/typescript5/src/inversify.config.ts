import 'reflect-metadata';

import { Container, injectable } from 'inversify';
import { TYPES } from './types.js';

@injectable()
class FirstService {
  first: string = 'first attribute';
}

@injectable()
class SecondService {
  second: string = 'second attribute';
}

@injectable()
class ThirdService {
  third: string = 'third attribute';
}

const container = new Container();

container.bind<FirstService>(TYPES.FirstService).to(FirstService);
container.bind<SecondService>(TYPES.SecondService).to(SecondService);
container.bind<ThirdService>(TYPES.ThirdService).to(ThirdService);

const firstService = container.get<FirstService>(TYPES.FirstService);

console.log(firstService.first);
