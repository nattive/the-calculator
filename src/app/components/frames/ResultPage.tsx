import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Typography } from '../ui/Typography';

type Props = {
    pet: string;
    petType: string;
    careType: string;
    location: string;
    country: string;
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
                <Typography variant='display'>£{(Math.ceil(yearlyProjectedSavings)).toLocaleString()} a year</Typography>

                <Typography variant='body' className='font-normal'>
                    based on {nights} nights pet care for a {petType.toLowerCase()} in {location}, {country}
                </Typography>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4">
                <Typography variant='h3' className='text-primary-900 capitalize-first'>
                    <span className="font-bold capitalize-first">{careType}</span>
                    <span className="font-medium"> in </span>
                    <span className="font-bold">{location}, {country}</span>
                    <span className="font-medium"> cost </span>
                    <span className="font-bold">£{cost}</span>
                    <span className="font-medium">. But with </span>
                    <span className="font-bold">TrustedHousesitters</span>
                    <span className="font-medium">, you could save up to </span>
                    <span className="font-bold">£{savings}</span>
                    <span className="font-medium">.</span>
                </Typography>
            </div>

            <button
                className="w-full bg-primary-900 text-utility-white py-4 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
                Register Now
                <ChevronRight className='text-highlight-700' size={20} />
            </button>
        </main>
    );
};

export default ResultPage;