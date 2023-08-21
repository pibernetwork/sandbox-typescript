/**
 * Case Map
 *
 * Understand how object conversion with maps works.
 */

export interface TypeA {
  _id: string;
  name: string;
  address: string;
}

export interface TypeB {
  _id: number;
  name: string;
  address: string;
}

// function getTypeA(id: string, name: string, address: string): TypeA {
//   return {
//     _id: id,
//     name,
//     address
//   };
// }

// function getTypeB(id: number, name: string, address: string): TypeB {
//   return {
//     _id: id,
//     name,
//     address
//   };
// }

// const idsToConvert = ['_id'];

export function convertType(items: TypeA[]): TypeB[] {
  return items.map((item) => {
    return {
      ...item,
      _id: parseInt(item._id)
    };
  });
}
