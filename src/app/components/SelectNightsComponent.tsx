import { ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react';
import Progress from './Progress';

type Props = {
    selectedNights?: number;
    setSelectedNights: (value: number) => void;
    onNext: () => void;
    onBack: () => void;
}

const SelectNightsComponent = ({ selectedNights = 1, setSelectedNights, onNext, onBack }: Props) => {
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
        <main className="max-w-4xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={60} />

            <div className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-2 sm:mb-4">
                    How many nights of pet care do you need?
                </h1>
            </div>

            <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
                <div className="relative">
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={selectedNights}
                        onChange={handleInputChange}
                        className="w-full h-14 sm:h-16 p-3 sm:p-4 pr-12 text-base sm:text-lg border-2 border-grey-300 rounded-regular focus:border-primary-500 focus:outline-none text-center"
                    />
                    <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                        <button
                            onClick={handleIncrement}
                            className="p-1 sm:p-1.5 text-grey-500 hover:text-primary-500 transition-colors active:scale-95"
                            aria-label="Increase nights"
                        >
                            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button
                            onClick={handleDecrement}
                            className="p-1 sm:p-1.5 text-grey-500 hover:text-primary-500 transition-colors active:scale-95"
                            aria-label="Decrease nights"
                        >
                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 max-w-2xl mx-auto px-4 sm:px-0">
                <button
                    onClick={onBack}
                    className="flex w-full sm:w-52 justify-center items-center gap-2 py-3 sm:py-0 text-accent-500 font-medium hover:text-accent-700 transition-colors border-2 border-transparent hover:border-accent-500 rounded-regular sm:border-none"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="w-full sm:flex-1 px-6 sm:px-8 py-3 rounded-regular font-medium transition-colors 
                        bg-primary-900 text-utility-white hover:bg-primary-700 active:scale-[0.98]"
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default SelectNightsComponent;