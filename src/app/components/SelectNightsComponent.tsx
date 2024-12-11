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
        <main className="max-w-4xl mx-auto p-6 mt-8">
            <Progress progress={60} />

            <div className="mb-12">
                <h1 className="text-3xl font-bold text-primary-700 mb-4">
                    How many nights of pet care do you need?
                </h1>
            </div>

            <div className="max-w-2xl mb-12">
                <div className="relative">
                    <input
                        type="text"
                        value={selectedNights}
                        onChange={handleInputChange}
                        className="w-full p-4 pr-12 text-lg border-2 border-grey-300 rounded-regular focus:border-primary-500 focus:outline-none"
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
                    className={`px-8 py-3 flex-1 rounded-regular font-medium transition-colors 
                        bg-primary-900 text-utility-white hover:bg-primary-700`}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default SelectNightsComponent;