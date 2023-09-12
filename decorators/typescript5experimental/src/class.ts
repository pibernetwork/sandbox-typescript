function sealed(constructor: Function) {
  console.log('Class decorator called');
}

@sealed
class ClassDecorator {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

export default ClassDecorator;
