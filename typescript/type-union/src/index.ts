interface Nutrients {
  kcal: number;
  proteins: number;
  phosphorus: number;
}

interface Data {
  name: keyof Nutrients;
  quantity: number;
  diff: number;
}

interface DataWithMin extends Data {
  min: number;
}

interface DataWithMax extends Data {
  max: number;
}

type DataWithMinOrMax = (DataWithMin | DataWithMax)[];

const data: DataWithMinOrMax = [
  {
    name: 'proteins',
    quantity: 1,
    diff: 10,
    max: 25
  },
  {
    name: 'kcal',
    quantity: 1,
    diff: 10,
    min: 10
  }
];

const messages = data.map((entry) => {
  if ('min' in entry) {
    return `Min of ${entry.min} for ${entry.name}`;
  }

  if ('max' in entry) {
    return `Max of ${entry.max} for ${entry.name}`;
  }

  throw new Error('No min or max');
});

console.log(messages);
