
import { IPetData } from "@/data/pet-cal-data.interface";
import { Pet, Option, Country } from "./types";
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

// Function to get price for a specific service
export function getPrice(
    countryId: string,
    city: string,
    petId: string,
    careType: string
): {
    price: number
    yearlyPrice: number
    dailySavings: number
    yearlySavings: number
    thsCostDaily: number
    thsCostYearly: number
} | null {
    try {
        const countryData = mergedPetData.countries.find(c => c.name === countryId) as Country
        const cityData = countryData?.cities.find(c => c.name === city);
        const thsCostDaily = countryData["ths-daily"]!
        const thsCostYearly = countryData["ths-yearly"]!

        if (!cityData) return null;

        // For dogs and cats, get specific service prices
        if (petId === 'dog' || petId === 'cat') {
            // @ts-expect-error error
            const price = cityData.prices[petId as keyof typeof cityData.prices][careType] || 0
            const dailySavings = price - countryData["ths-daily"]!
            const yearlyPrice = price * 365
            const yearlySavings = yearlyPrice - countryData["ths-yearly"]!
            return {
                price, yearlyPrice, yearlySavings, dailySavings, thsCostDaily,
                thsCostYearly
            }
        }
        const price = cityData.prices['pet sitting'] || 0
        const dailySavings = price - countryData?.["ths-daily"]
        const yearlyPrice = price * 365
        const yearlySavings = yearlyPrice - countryData["ths-yearly"]!
        return {
            price, yearlyPrice, yearlySavings, dailySavings, thsCostDaily,
            thsCostYearly
        }
    } catch (error) {
        console.error('Error getting price:', error);
        return null;
    }
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
    const _city = (toIgnoreCity(petId) || !petId) ? _country?.cities.find(c => c.name === "Others") : _country?.cities.find(c => c.name.toLowerCase() === city?.toLowerCase())
    const _price = _city?.prices[petId.toLowerCase() as never]
    const costPerYear = Number(_price?.[careType as never]) * +nights
    console.log({
        costPerYear,
        nights,
        price: _price?.[careType as never],
        thsPrice: _country?.["ths-yearly"],
        savings: Math.ceil(costPerYear - (_country?.["ths-yearly"] || 0))
    });

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

// Helper function to get service price ranges across all cities
export function getPriceRange(
    petId: string,
    careType: string
): { min: number; max: number; average: number } | null {
    try {
        const prices: number[] = [];

        mergedPetData.countries.forEach(country => {
            country.cities.forEach(city => {
                const price = getPrice(country.id, city.name, petId, careType);
                if (price) prices.push(price.price);
            });
        });

        if (prices.length === 0) return null;

        return {
            min: Math.min(...prices),
            max: Math.max(...prices),
            average: prices.reduce((a, b) => a + b, 0) / prices.length
        };
    } catch (error) {
        console.error('Error calculating price range:', error);
        return null;
    }
}

export const toIgnoreCity = (petCare: string) => !["dog",
    "cat"].includes(petCare)