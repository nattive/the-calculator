"use client";
import { useState } from 'react';
import SelectPetComponent from './components/frames/SelectPet';
import SelectCareComponent from './components/frames/SelectCareComponent';
import SelectLocationComponent from './components/frames/SelectLocationComponent';
import SelectNightsComponent from './components/frames/SelectNightsComponent';
import ResultPage from './components/frames/ResultPage';
import {
  calculateTotalCost,
  getAllPets,
  getCareTypesForPet,
  getCitiesForCountry,
  mergedPetData,
} from '@/utils/petData';
import { Country } from '@/utils/types';

type FormData = {
  pet?: string;
  care?: string;
  nights: number;
  country?: {
    name: string
    currency: string
  };
  city?: string;
}

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({ nights: 1 });
  const [stage, setStage] = useState<'pet' | 'care' | 'location' | 'nights' | 'result'>('pet');
  const [result, setResult] = useState<{
    costPerYear: number;
    thsPrice: number | undefined;
    savings: number;
  } | null>(null);

  const updateFormData = (key: keyof FormData, value: unknown) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleComplete = () => {



    /**
     *Cost calculation
     */
    const calculation = calculateTotalCost(
      formData.country!,
      formData.pet!,
      formData.care!,
      formData.nights,
      formData.city,
    );

    setResult(calculation)
    setStage('result')
  }




  return (
    <div className=" max-h-full bg-utility-white">

      {stage === 'pet' && (
        <SelectPetComponent
          selectedPet={formData.pet}
          setSelectedPet={(value) => updateFormData('pet', value)}
          onNext={() => setStage('location')}
          availablePets={getAllPets()}
        />
      )}
      {stage === 'location' && (
        <SelectLocationComponent
          selectedCountry={formData.country?.name}
          selectedPet={formData.pet}
          selectedCity={formData.city}
          setSelectedCountry={(value) => updateFormData('country', value)}
          setSelectedCity={(value) => updateFormData('city', value)}
          onNext={() => setStage('care')}
          onBack={() => setStage('pet')}
          countries={mergedPetData.countries as Country[]}
          cities={formData.country ?
            getCitiesForCountry(formData.country?.name) : []}
        />
      )}

      {stage === 'care' && (
        <SelectCareComponent
          careOptions={getCareTypesForPet(formData.pet as string)}
          selectedCare={formData.care}
          setSelectedCare={(value) => updateFormData('care', value)}
          onNext={() => setStage('nights')}
          onBack={() => setStage('location')}
        />
      )}


      {stage === 'nights' && (
        <SelectNightsComponent
          selectedCountry={formData.country?.name}
          selectedNights={formData.nights}
          setSelectedNights={(value) => updateFormData('nights', value)}
          onBack={() => setStage('care')}
          onNext={handleComplete}
        />
      )}



      {stage === 'result' && result && (
        <ResultPage
          pet={formData.pet!}
          petType={formData.pet!}
          careType={formData.care!}
          location={formData.city!}
          country={formData.country}
          nights={formData.nights!}
          cost={result.costPerYear}
          savings={result.savings}
          yearlyProjectedSavings={result.savings}
        />
      )}


    </div>
  );
}