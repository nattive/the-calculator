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
    location,
    country,
    nights,
    cost,
    careType,
    yearlyProjectedSavings
}: Props) => {
    return (
        <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8 space-y-8">
            {/* Savings Card */}
            <div className="bg-[#E8FAE9] rounded-lg p-8 text-center">
                <Typography className='text-primary-900' variant='h3'>With TrustedHousesitters you could save</Typography>
                <Typography className='text-primary-900' variant='display'>{country?.currency}{(Math.ceil(yearlyProjectedSavings || 0)).toLocaleString()} a year</Typography>

                <Typography variant='body' className='font-normal'>
                    based on {nights} nights of pet care for a {petType.toLowerCase()} in {location ? `${location},` : null} {country?.name}
                </Typography>
            </div>
            {/* Cost Breakdown */}
            <div className="space-y-4">
                <Typography variant='h3' className='text-primary-900 capitalize-first'>
                    <span className="font-medium"> You’ll pay </span>
                    <span className="font-bold capitalize-first"> {country?.currency}{Math.ceil(cost).toLocaleString()}</span>
                    <span className="font-medium"> for {careType.toLowerCase()} in </span>
                    <span className="font-bold">{location ? `${location},` : null} {country?.name}</span>
                    <span className="font-medium"> But with TrustedHousesitters, you could save up to </span>
                    <span className="font-bold"> {country?.currency}{(Math.ceil(yearlyProjectedSavings || 0)).toLocaleString()}</span>
                    <span className="font-medium"> for  </span>
                    <span className="font-bold"> {nights}</span>
                    <span className="font-medium">day(s)</span>.
                </Typography>
            </div>

            <Button
            >
                Sign up now
                <ChevronRight className='text-highlight-700' size={20} />
            </Button>
        </main>
    );
};

export default ResultPage;