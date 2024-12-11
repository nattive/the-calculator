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
        setSelectedCity(''); // Reset city when country changes
        setIsCountryOpen(false);
    };

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        setIsCityOpen(false);
    };
    console.log(cities);

    return (
        <main className="max-w-4xl mx-auto p-6 mt-8">
            <Progress progress={90} />

            <div className="mb-12">
                <h1 className="text-3xl font-bold text-primary-700 mb-4">
                    Where do you live?
                </h1>
            </div>

            <div className="max-w-2xl space-y-6">
                {/* Country Selection */}
                <div>
                    <label className="text-xl text-primary-900 font-medium">
                        Choose your country
                    </label>
                    <div className="relative mt-2">
                        <button
                            onClick={() => {
                                setIsCountryOpen(!isCountryOpen);
                                setIsCityOpen(false);
                            }}
                            className="w-full p-4 text-left border-2 border-grey-300 rounded-regular flex justify-between items-center hover:border-primary-500 transition-colors"
                        >
                            <span className="text-lg text-grey-700">
                                {selectedCountry || 'Select a country'}
                            </span>
                            <ChevronDown
                                size={20}
                                className={`transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isCountryOpen && (
                            <div className="absolute bg-utility-white z-20 w-full mt-1 bg-white border-2 border-grey-300 rounded-regular max-h-60 overflow-auto shadow-md">
                                {countries.map((country) => (
                                    <button
                                        key={country.value}
                                        onClick={() => handleCountrySelect(country.name)}
                                        className={`w-full p-4 text-left hover:bg-grey-100 transition-colors ${selectedCountry === country.name ? 'bg-primary-300/10' : ''
                                            }`}
                                    >
                                        {country.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* City Selection - Only shown if country is selected */}
                {selectedCountry && cities.length > 0 && (
                    <div>
                        <label className="text-xl text-primary-900 font-medium">
                            Choose your city
                        </label>
                        <div className="relative mt-2">
                            <button
                                onClick={() => {
                                    setIsCityOpen(!isCityOpen);
                                    setIsCountryOpen(false);
                                }}
                                className="w-full p-4 text-left border-2 border-grey-300 rounded-regular flex justify-between items-center hover:border-primary-500 transition-colors"
                            >
                                <span className="text-lg text-grey-700">
                                    {selectedCity || 'Select a city'}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform ${isCityOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {isCityOpen && (
                                <div className="absolute bg-utility-white z-20 w-full mt-1 bg-white border-2 border-grey-300 rounded-regular max-h-60 overflow-auto shadow-md">
                                    {cities.map((city) => (
                                        <button
                                            key={city}
                                            onClick={() => handleCitySelect(city)}
                                            className={`w-full p-4 text-left hover:bg-grey-100 transition-colors ${selectedCity === city ? 'bg-primary-300/10' : ''
                                                }`}
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

            <div className="flex justify-between items-center mt-8 max-w-2xl">
                <button
                    onClick={onBack}
                    className="flex w-52 justify-center items-center gap-2 text-accent-500 font-medium hover:text-accent-700 transition-colors"
                >
                    <ChevronLeft size={20} />
                    Back
                </button>
                <button
                    onClick={onNext}
                    className={`px-8 py-3 flex-1 rounded-regular font-medium transition-colors ${selectedCountry && selectedCity
                        ? 'bg-primary-900 text-utility-white hover:bg-primary-700'
                        : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                        }`}
                // disabled={!selectedCountry || !!(cities.length > 0 && selectedCity)}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default SelectLocationComponent;