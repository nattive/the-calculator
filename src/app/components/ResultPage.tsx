import React from 'react';
import { ChevronRight } from 'lucide-react';

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
        <main className="max-w-4xl mx-auto p-6 mt-8 space-y-8">
            {/* Savings Card */}
            <div className="bg-[#E8FAE9] rounded-lg p-8 text-center">
                <h2 className="text-primary-900 mb-4">
                    <span className="block text-lg font-bold">With TrustedHousesitters you could save</span>
                    <span className="text-3xl font-bold">£{(Math.ceil(yearlyProjectedSavings)).toLocaleString()} a year</span>
                </h2>
                <p className="text-grey-700">
                    based on {nights} nights pet care for a {petType.toLowerCase()} in {location}, {country}
                </p>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4">
                <p className="text-xl">
                    <span className="font-semibold capitalize">{careType}</span>
                    <span className="text-grey-700"> in </span>
                    <span className="font-semibold">{location}, {country}</span>
                    <span className="text-grey-700"> cost </span>
                    <span className="font-semibold">£{cost}</span>
                    <span className="text-grey-700">. But with </span>
                    <span className="font-semibold text-primary-900">TrustedHousesitters</span>
                    <span className="text-grey-700">, you could save up to </span>
                    <span className="font-semibold">£{savings}</span>
                    <span className="text-grey-700">.</span>
                </p>
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