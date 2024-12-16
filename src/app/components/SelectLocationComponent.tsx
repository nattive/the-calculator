import { ChevronLeft, ChevronDown } from 'lucide-react';
import Progress from './Progress';
import { useState } from 'react';
import { Option } from '@/utils/types';

type Props = {
    selectedCountry?: string;
    selectedCity?: string;
    setSelectedCountry: (value: string) => void;
    setSelectedCity: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
    countries: Option[];
    cities: string[];
}

const SelectLocationComponent = ({
    selectedCountry,
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

    const handleCountrySelect = (country: string) => {
        setSelectedCountry(country);
        setSelectedCity('');
        setIsCountryOpen(false);
    };

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        setIsCityOpen(false);
    };

    return (
        <main className="max-w-4xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={90} />

            <div className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-2 sm:mb-4">
                    Where do you live?
                </h1>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0">
                {/* Country Selection */}
                <div className="relative">
                    <label className="text-lg sm:text-xl text-primary-900 font-medium block mb-2">
                        Choose your country
                    </label>
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsCountryOpen(!isCountryOpen);
                                setIsCityOpen(false);
                            }}
                            className="w-full p-3 sm:p-4 text-left border-2 border-grey-300 rounded-regular 
                                flex justify-between items-center hover:border-primary-500 transition-colors
                                focus:outline-none focus:border-primary-500"
                        >
                            <span className="text-base sm:text-lg text-grey-700">
                                {selectedCountry || 'Select a country'}
                            </span>
                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isCountryOpen && (
                            <div className="absolute z-20 w-full mt-1 bg-utility-white border-2 border-grey-300 
                                rounded-regular max-h-48 sm:max-h-60 overflow-auto shadow-lg">
                                {countries.map((country) => (
                                    <button
                                        key={country.value}
                                        onClick={() => handleCountrySelect(country.name)}
                                        className={`w-full p-3 sm:p-4 text-left hover:bg-grey-100 transition-colors
                                            text-base sm:text-lg ${selectedCountry === country.name ? 'bg-primary-300/10' : ''}`}
                                    >
                                        {country.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* City Selection */}
                {selectedCountry && cities.length > 0 && (
                    <div className="relative">
                        <label className="text-lg sm:text-xl text-primary-900 font-medium block mb-2">
                            Pick the closest city
                        </label>
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsCityOpen(!isCityOpen);
                                    setIsCountryOpen(false);
                                }}
                                className="w-full p-3 sm:p-4 text-left border-2 border-grey-300 rounded-regular 
                                    flex justify-between items-center hover:border-primary-500 transition-colors
                                    focus:outline-none focus:border-primary-500"
                            >
                                <span className="text-base sm:text-lg text-grey-700">
                                    {selectedCity || 'Select a city'}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-200 ${isCityOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {isCityOpen && (
                                <div className="absolute z-20 w-full mt-1 bg-utility-white border-2 border-grey-300 
                                    rounded-regular max-h-48 sm:max-h-60 overflow-auto shadow-lg">
                                    {cities.map((city) => (
                                        <button
                                            key={city}
                                            onClick={() => handleCitySelect(city)}
                                            className={`w-full p-3 sm:p-4 text-left hover:bg-grey-100 transition-colors
                                                text-base sm:text-lg ${selectedCity === city ? 'bg-primary-300/10' : ''}`}
                                        >
                                            {city}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 max-w-2xl mx-auto px-4 sm:px-0">
                <button
                    onClick={onBack}
                    className="flex w-full sm:w-52 justify-center items-center gap-2 py-3 sm:py-0 
                        text-accent-500 font-medium hover:text-accent-700 transition-colors
                        border-2 border-transparent hover:border-accent-500 rounded-regular sm:border-none"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>
                <button
                    onClick={onNext}
                    className={`w-full sm:flex-1 px-6 sm:px-8 py-3 rounded-regular font-medium 
                        transition-colors active:scale-[0.98] ${selectedCountry && selectedCity
                            ? 'bg-primary-900 text-utility-white hover:bg-primary-700'
                            : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                        }`}
                    disabled={!selectedCountry || !selectedCity}
                >
                    Next
                </button>
            </div>
        </main>
    );
};
export default SelectLocationComponent;