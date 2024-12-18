import { ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react';
import Progress from '../ui/Progress';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

type Props = {
    selectedNights?: number;
    selectedCountry?: string
    setSelectedNights: (value: number) => void;
    onNext: () => void;
    onBack: () => void;
}

const SelectNightsComponent = ({ selectedNights = 1, setSelectedNights, onNext, onBack, selectedCountry }: Props) => {
    const handleIncrement = () => {
        setSelectedNights(selectedNights + 1);
    };

    const handleDecrement = () => {
        if (selectedNights > 1) {
            setSelectedNights(selectedNights - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setSelectedNights(value);
        }
    };

    return (
        <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={90} />

            <Typography variant="h1">
                {
                    ["United Kingdom", "Australia"].includes(selectedCountry!) ? "How many nights of holiday pet care do you book per year?" : "How many nights of vacation pet care do you book per year?"
                }

            </Typography>


            <div className="relative">
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={selectedNights}
                    onChange={handleInputChange}
                    className="w-full p-4  text-lg border-2 border-grey-300 rounded-regular focus:border-primary-500 focus:outline-none"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                        onClick={handleIncrement}
                        className="p-1 text-grey-500 hover:text-primary-500 transition-colors"
                        aria-label="Increase nights"
                    >
                        <ChevronUp size={20} />
                    </button>
                    <button
                        onClick={handleDecrement}
                        className="p-1 text-grey-500 hover:text-primary-500 transition-colors"
                        aria-label="Decrease nights"
                    >
                        <ChevronDown size={20} />
                    </button>
                </div>
            </div>


            <div className="flex mt-8 justify-between items-center gap-4   mx-auto  sm:px-0">
                <Button
                    variant="link"
                    disabled={selectedNights < 1}
                    onClick={onBack}
                >
                    <ChevronLeft className="w-5 h-5 text-accent-500" />
                    Back
                </Button>
                <Button
                    disabled={selectedNights < 0}
                    onClick={onNext}
                    variant="primary"

                    className="group w-[70%]"
                >
                    Next
                </Button>
            </div>
        </main>
    );
};

export default SelectNightsComponent;