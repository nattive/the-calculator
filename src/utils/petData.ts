
import { IPetData } from "@/data/pet-cal-data.interface";
import { Pet, Option } from "./types";
import mergedData from '@/data/pet-cal-data.json';

export const mergedPetData: IPetData = mergedData;

// Function to get all pets with their icons
export function getAllPets(): Pet[] {
    return mergedPetData.pets;
}

// Function to get all unique countries
export function getCountries(): Option[] {
    return mergedPetData.countries.map(country => ({
        name: country.name,
        value: country.id
    }));
}

// Function to get cities for a country
export function getCitiesForCountry(countryId: string): string[] {
    const countryData = mergedPetData.countries.find(c => c.name === countryId);
    return countryData ? countryData.cities.map(city => city.name) : [];
}

// Function to get care types for a specific pet
export function getCareTypesForPet(petId: string): string[] {
    const pet = mergedPetData.pets.find(p => p.id === petId);
    return pet ? pet.careTypes : [];
}


// Function to calculate total cost
export function calculateTotalCost(
    selectedCountry: {
        name: string;
        currency: string;
    },
    petId: string,
    careType: string,
    nights: number,
    city?: string,
): {
    costPerYear: number;
    thsPrice: number | undefined;
    savings: number;
} {
    /**
     * get selected country
     */
    const _country = mergedData.countries.find(country => country.name.toLowerCase() === selectedCountry.name.toLowerCase())
    /**
     * check if pet selected is part of pets without city
     * or pet which cities should be excluded
     * Falls back to country level price (Others)
     */
    const _city = (toIgnoreCity(petId) || !petId) ? _country?.cities.find(c => c.name === "Others") : _country?.cities.find(c => c.name.toLowerCase() === city?.toLowerCase())
    /**
     * Get the price object
     */
    const _price = _city?.prices[petId.toLowerCase() as never]
    /**
     * Get the actual price from the price object
     */
    const costPerYear = Number(_price?.[careType as never]) * +nights
    // console.log({
    //     costPerYear,
    //     nights,
    //     price: _price?.[careType as never],
    //     thsPrice: _country?.["ths-yearly"],
    //     savings: Math.round(costPerYear - (_country?.["ths-yearly"] || 0))
    // });

    return {
        costPerYear,
        thsPrice: _country?.["ths-yearly"],
        savings: costPerYear - (_country?.["ths-yearly"] || 0)
    }
}

// Helper function to check if a care type is available for a pet
export function isCareTypeAvailable(petId: string, careType: string): boolean {
    const pet = mergedPetData.pets.find(p => p.id === petId);
    return pet ? pet.careTypes.includes(careType) : false;
}


/**
 * Check if city dropdown is to be ignored
 * @param petCare string
 * @returns 
 */
export const toIgnoreCity = (petCare: string) => !["dog",
    "cat"].includes(petCare)