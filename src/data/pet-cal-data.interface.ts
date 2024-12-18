export interface IPetData {
  pets: Pet[];
  countries: Country[];
}

interface Country {
  id: string;
  name: string;
  'ths-daily': number;
  'ths-yearly': number;
  currency: string;
  cities: City[];
}

interface City {
  name: string;
  prices: Prices;
}

interface Prices {
  dog: Dog;
  cat: Cat;
  horse?: Horse;
  rabbit?: Rabbit;
  reptile?: Reptile;
  chicken?: Chicken;
  bird?: Bird;
}

interface Bird {
  'bird sitting': number;
}

interface Chicken {
  'chicken sitting': number;
}

interface Reptile {
  'reptile sitting': number;
}

interface Rabbit {
  'rabbit sitting': number;
}

interface Horse {
  'horse boarding': number;
}

interface Cat {
  'cat sitting': number;
  'cat drop-in visits': number;
  catteries: number;
}

interface Dog {
  'dog sitting': number;
  'dog kennels'?: number;
  'doggy daycare'?: number;
}

interface Pet {
  id: string;
  name: string;
  icon: string;
  careTypes: string[];
}