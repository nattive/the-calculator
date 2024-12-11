"use client"
import { useState } from 'react';
import SelectPetComponent from './components/SelectPet';
import SelectCareComponent from './components/SelectCareComponent';
import SelectLocationComponent from './components/SelectLocationComponent';
import SelectNightsComponent from './components/SelectNightsComponent';
import ResultPage from './components/ResultPage';
import { calculateTotalCost, getAllPets, getCareTypesForPet, getCitiesForCountry, getCountries } from '@/utils/petData';

type FormData = {
  pet?: string;
  care?: string;
  nights?: number;
  country?: string;
  city?: string;
}

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({ nights: 1 });
  const [stage, setStage] = useState<'pet' | 'care' | 'location' | 'nights' | 'result'>('pet');
  const [result, setResult] = useState<{
    cost: number;
    savings: number;
    yearlyProjectedSavings: number;
  } | null>(null);

  const updateFormData = (key: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleComplete = () => {
    if (formData.country && formData.city && formData.pet &&
      formData.care && formData.nights) {
      const calculation = calculateTotalCost(
        formData.country,
        formData.city,
        formData.pet,
        formData.care,
        formData.nights
      );
      console.log({ calculation });

      if (calculation) {

        // Project yearly savings based on current booking

        setResult({
          cost: Math.round(calculation.totalCostDaily),
          savings: Math.round(calculation.dailySavings),
          yearlyProjectedSavings: calculation.yearlySavings
        });
        setStage('result');
      }
    }
  };



  return (
    <div className="min-h-screen bg-utility-white">
      {stage === 'pet' && (
        <SelectPetComponent
          selectedPet={formData.pet}
          setSelectedPet={(value) => updateFormData('pet', value)}
          onNext={() => setStage('care')}
          availablePets={getAllPets()}
        />
      )}

      {stage === 'care' && (
        <SelectCareComponent
          careOptions={getCareTypesForPet(formData.pet as string)}
          selectedCare={formData.care}
          setSelectedCare={(value) => updateFormData('care', value)}
          onNext={() => setStage('nights')}
          onBack={() => setStage('pet')}
        />
      )}

      {stage === 'nights' && (
        <SelectNightsComponent
          selectedNights={formData.nights}
          setSelectedNights={(value) => updateFormData('nights', value)}

          onBack={() => setStage('care')}
          onNext={() => setStage('location')}
        />
      )}

      {stage === 'location' && (
        <SelectLocationComponent
          selectedCountry={formData.country}
          selectedCity={formData.city}
          setSelectedCountry={(value) => updateFormData('country', value)}
          setSelectedCity={(value) => updateFormData('city', value)}
          onNext={handleComplete}
          onBack={() => setStage('care')}
          countries={getCountries()}
          cities={formData.country ?
            getCitiesForCountry(formData.country) : []}
        />
      )}

      {stage === 'result' && result && (
        <ResultPage
          pet={formData.pet!}
          petType={formData.pet!}
          careType={formData.care!}
          location={formData.city!}
          country={formData.country!}
          nights={formData.nights!}
          cost={result.cost}
          savings={result.savings}
          yearlyProjectedSavings={result.yearlyProjectedSavings}
        />
      )}
    </div>
  );
}