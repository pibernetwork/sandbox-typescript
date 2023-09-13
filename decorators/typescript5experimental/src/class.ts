/* eslint-disable @typescript-eslint/ban-types */
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
/* eslint-enable @typescript-eslint/ban-types */

@sealed
export class ClassDecorator {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}
