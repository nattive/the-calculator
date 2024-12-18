import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

type Props = {
    pet: string;
    petType: string;
    careType: string;
    location: string;
    country?: {
        name: string;
        currency: string;
    };
    nights: number;
    cost: number;
    savings: number;
    yearlyProjectedSavings: number;
}

const ResultPage = ({
    petType,
    careType,
    location,
    country,
    nights,
    cost,
    savings,
    yearlyProjectedSavings
}: Props) => {
    return (
        <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8 space-y-8">
            {/* Savings Card */}
            <div className="bg-[#E8FAE9] rounded-lg p-8 text-center">
                <Typography variant='h3'>With TrustedHousesitters you could save</Typography>
                <Typography variant='display'>{country?.currency}{(Math.ceil(yearlyProjectedSavings)).toLocaleString()} a year</Typography>

                <Typography variant='body' className='font-normal'>
                    based on {nights} nights of pet care for a {petType.toLowerCase()} in {location ? `${location},` : null}, {country?.name}
                </Typography>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4">
                <Typography variant='h3' className='text-primary-900 capitalize-first'>
                    <span className="font-bold capitalize-first">{careType}</span>
                    <span className="font-medium"> in </span>
                    <span className="font-bold">{location ? `${location},` : null} {country?.name}</span>
                    <span className="font-medium"> cost </span>
                    <span className="font-bold">{`${country?.currency}${cost}`}</span>
                    <span className="font-medium">. But with </span>
                    <span className="font-bold">TrustedHousesitters</span>
                    <span className="font-medium">, you could save up to </span>
                    <span className="font-bold">{`${country?.currency}${savings}`}</span>
                    <span className="font-medium">.</span>
                </Typography>
            </div>

            <Button
            >
                Register now
                <ChevronRight className='text-highlight-700' size={20} />
            </Button>
        </main>
    );
};

export default ResultPage;