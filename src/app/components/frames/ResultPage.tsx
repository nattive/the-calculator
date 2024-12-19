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
    const onClickBenefit = () => {

        switch (country?.name) {
            case "United Kingdom":
                return window.location.href = "https://www.trustedhousesitters.com/pages/pet-sitting-with-love/"
            case "United States":
                return window.location.href = "https://www.trustedhousesitters.com/pages/pet-sitting-with-love-usd/"
            case "Australia":
                return window.location.href = "https://www.trustedhousesitters.com/pages/pet-sitting-with-love-aud/"
            case "Canada":
                return window.location.href = "https://www.trustedhousesitters.com/pages/pet-sitting-with-love-cad/"
            default:
                return window.location.href = "https://www.trustedhousesitters.com/pages/pet-sitting-with-love/"
        }
    }
    return (
        <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8 space-y-8">
            {/* Savings Card */}
            <div className="bg-[#E8FAE9] rounded-lg p-8 text-center">
                {
                    yearlyProjectedSavings > 0 ? <>

                        <Typography className='text-primary-900' variant='h3'>With TrustedHousesitters you could save</Typography>
                        <Typography className='text-primary-900' variant='display'>{country?.currency}{(Math.ceil(yearlyProjectedSavings || 0)).toLocaleString()} a year</Typography>

                        <Typography variant='body' className='font-normal'>
                            based on {nights} nights of pet care for a {petType.toLowerCase()} in {location ? `${location},` : null} {country?.name}.
                        </Typography>
                    </> : <>
                        <Typography className='text-primary-900' variant='display'>Sorry</Typography>

                        <Typography className='text-primary-900' variant='h3'>It doesn’t look like you’ll save money on pet care this time around.   </Typography>

                    </>
                }

            </div>
            {/* Cost Breakdown */}
            <div className="space-y-4">
                {
                    yearlyProjectedSavings > 0 ?

                        <Typography variant='h3' className='text-primary-900 capitalize-first'>
                            <span className="font-medium"> You’ll pay </span>
                            <span className="font-bold capitalize-first"> {country?.currency}{Math.ceil(cost).toLocaleString()}</span>
                            <span className="font-medium"> for {careType.toLowerCase()} in </span>
                            <span className="font-bold">{location ? `${location},` : null} {country?.name}.</span>
                            <span className="font-medium"> But with TrustedHousesitters, you could save up to </span>
                            <span className="font-bold"> {country?.currency}{(Math.ceil(yearlyProjectedSavings || 0)).toLocaleString()}</span>
                            <span className="font-medium"> for  </span>
                            <span className="font-bold"> {nights}</span>
                            <span className="font-medium">day(s)</span>.
                        </Typography>
                        : <>
                            <Typography variant='h3' className='text-primary-900 capitalize-first text-center'>
                                You’re more likely to save if you go away for more nights a year.
                            </Typography>
                        </>}
            </div>

            <Button
                onClick={() => {
                    return yearlyProjectedSavings > 0 ? null : onClickBenefit()
                }}
            >
                {yearlyProjectedSavings > 0 ? "Sign up now" : "See all our benefits"}
                <ChevronRight className='text-highlight-700' size={20} />
            </Button>
        </main>
    );
};

export default ResultPage;