export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images?: string[];
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ["phone_XL.png"]
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ["phone_mini.jpg"]
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    images: ["phone_stand.jpg"]
  },
  {
    id: 4,
    name: 'Smart TV',
    price: 893,
    description: 'The TV is so smart that the owner gets dumbed down',
    images: ["smart_tv.png"]
  },
  {
    id: 5,
    name: 'Laptop HP',
    price: 699,
    description: 'The best laptop is likely to be stolen but maybe not',
    images: ["lap.jpg"]
  },
  {
    id: 6,
    name: 'Roku TV - 4K',
    price: 997,
    description: 'A great TV featuring 4K resolution',
    images: ["roku.jpg"]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/