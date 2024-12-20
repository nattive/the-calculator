import { ChevronLeft, ChevronDown } from 'lucide-react';
import Progress from '../ui/Progress';
import { useState } from 'react';
import { Country } from '@/utils/types';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { toIgnoreCity } from '@/utils/petData';

type Props = {
    selectedCountry?: string;
    selectedCity?: string;
    setSelectedCountry: (value: Country) => void;
    setSelectedCity: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
    countries: Country[];
    cities: string[];
    selectedPet?: string
}

const SelectLocationComponent = ({
    selectedCountry,
    selectedPet,
    selectedCity,
    setSelectedCountry,
    setSelectedCity,
    onNext,
    onBack,
    countries,
    cities
}: Props) => {
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isCityOpen, setIsCityOpen] = useState(false);

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setSelectedCity('');
        setIsCountryOpen(false);

    };

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        setIsCityOpen(false);
    };

    const isButtonDisabled = () => {
        // Country must have a value
        if (!selectedCountry) return true;

        // Check pet condition for city requirement
        const ignoreCityCheck = toIgnoreCity(selectedPet!);

        // If we don't ignore city check, city must have a value
        if (!ignoreCityCheck && !selectedCity) return true;

        return false;
    };


    return (
        <main className="max-w-2xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={30} />

            <div className="mb-8 sm:mb-12">
                <Typography variant="h1">
                    Where do you live?
                </Typography>
            </div>

            <div className="w-full space-y-4 sm:space-y-6">
                {/* Country Selection */}
                <div className="relative">
                    <Typography variant="label">
                        Choose your country
                    </Typography>
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsCountryOpen(!isCountryOpen);
                                setIsCityOpen(false);
                            }}
                            className="w-full p-3 sm:p-4 text-left border-2 border-grey-300 dark:border-dark-border-medium rounded-regular 
                                flex justify-between items-center hover:border-primary-500 dark:hover:border-dark-primary-400 transition-colors
                                focus:outline-none focus:border-primary-500 dark:focus:border-dark-primary-400"
                        >
                            <span className="text-base sm:text-lg text-grey-700 dark:text-dark-text-primary">
                                {selectedCountry || 'Country'}
                            </span>
                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 dark:text-dark-text-primary ${isCountryOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isCountryOpen && (
                            <div className="absolute z-20 w-full mt-1 bg-utility-white dark:bg-dark-bg-800 border-2 border-grey-300 
                                dark:border-dark-border-medium rounded-regular max-h-48 sm:max-h-60 overflow-auto shadow-lg">
                                {countries.map((country) => (
                                    <button
                                        key={country.id}
                                        onClick={() => handleCountrySelect(country)}
                                        className={`w-full p-3 sm:p-4 text-left hover:bg-grey-100 dark:hover:bg-dark-bg-700 transition-colors
                                         text-grey-700 dark:text-dark-text-primary text-base sm:text-lg ${selectedCountry === country.name ? 'bg-primary-300/10 dark:bg-dark-primary-900/20' : ''
                                            }`}
                                    >
                                        {country.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* City Selection */}
                {selectedCountry && cities.length > 0 && !!selectedPet && !toIgnoreCity(selectedPet) && (
                    <div className="relative">
                        <Typography variant="label">
                            Pick the closest city
                        </Typography>
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsCityOpen(!isCityOpen);
                                    setIsCountryOpen(false);
                                }}
                                className="w-full p-3 sm:p-4 text-left border-2 border-grey-300 dark:border-dark-border-medium rounded-regular 
                                    flex justify-between items-center hover:border-primary-500 dark:hover:border-dark-primary-400 transition-colors
                                    focus:outline-none focus:border-primary-500 dark:focus:border-dark-primary-400"
                            >
                                <span className="text-base sm:text-lg capitalize-first text-grey-700 dark:text-dark-text-primary">
                                    {selectedCity || 'City'}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-200 dark:text-dark-text-primary ${isCityOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {isCityOpen && (
                                <div className="absolute z-20 w-full mt-1 bg-utility-white dark:bg-dark-bg-800 border-2 border-grey-300 
                                    dark:border-dark-border-medium rounded-regular max-h-48 sm:max-h-60 overflow-auto shadow-lg">
                                    {cities
                                        .filter(c => c.toLowerCase() !== 'others')
                                        .map((city) => (
                                            <button
                                                key={city}
                                                onClick={() => handleCitySelect(city)}
                                                className={`w-full p-3 sm:p-4 text-left hover:bg-grey-100 dark:hover:bg-dark-bg-700 transition-colors
                                                capitalize-first text-grey-700 dark:text-dark-text-primary text-base sm:text-lg ${selectedCity === city ? 'bg-primary-300/10 dark:bg-dark-primary-900/20' : ''
                                                    }`}
                                            >
                                                {city}
                                            </button>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center text-accent-500 dark:text-dark-accent-300 gap-4 mt-8">
                <Button
                    variant="link"
                    onClick={onBack}
                    className="group w-[50%]"
                >
                    <ChevronLeft className="w-5 h-5 text-accent-500 dark:text-dark-accent-300" />
                    Back
                </Button>
                <Button
                    disabled={isButtonDisabled()}
                    onClick={onNext}
                    variant="primary"
                >
                    Next
                </Button>
            </div>
        </main>
    );
};
export default SelectLocationComponent;