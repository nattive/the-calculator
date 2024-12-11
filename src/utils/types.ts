
// Types file (types.ts)
export interface Pet {
    id: string;
    name: string;
    icon: string;
    careTypes: string[];
}

export interface Option {
    name: string;
    value: string;
}

export interface CityPrices {
    dog?: {
        [key: string]: number;
    };
    cat?: {
        [key: string]: number;
    };
    pet_sitting: number;
}

export interface City {
    name: string;
    prices: Prices;
}


export interface Country {
    id: string;
    name: string;
    cities: City[];
}



export interface PetData {
    pets: Pet[];
    countries: Country[];
}



export interface Prices {
    dog: Dog;
    cat: Cat;
    'pet sitting': number;
}

export interface Cat {
    'cat sitting': number;
    'cat drop-in visits': number;
    catteries: number;
}

export interface Dog {
    'dog sitting': number;
    'dog walking': number;
    'dog kennels': number;
    'doggy daycare': number;
    'dog drop-in visits': number;
}

