import { ChevronLeft } from "lucide-react";
import Progress from "./Progress";

type Props = {
    selectedCare?: string;
    setSelectedCare: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
    careOptions: string[]
}

const SelectCareComponent = ({ careOptions, selectedCare, setSelectedCare, onNext, onBack }: Props) => {
    return (
        <main className="max-w-4xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={30} />

            <div className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-2 sm:mb-4">
                    What&apos;s your go-to holiday pet care?
                </h1>
            </div>

            <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12 px-4 sm:px-0">
                {careOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => setSelectedCare(option)}
                        className="w-full text-left group"
                    >
                        <div className={`
                            flex items-center p-3 sm:p-4 rounded-regular border-2 transition-all
                            ${selectedCare === option
                                ? 'border-primary-500 bg-primary-300/10'
                                : 'border-grey-300 hover:border-primary-500'
                            }
                        `}>
                            <div className="flex items-center justify-center mr-3 sm:mr-4">
                                <div className={`
                                    w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 flex items-center justify-center
                                    transition-colors
                                    ${selectedCare === option
                                        ? 'border-primary-500'
                                        : 'border-grey-400 group-hover:border-primary-500/50'
                                    }
                                `}>
                                    {selectedCare === option && (
                                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary-500 
                                            animate-scale-down-96"
                                        />
                                    )}
                                </div>
                            </div>
                            <span className="text-base sm:text-lg text-primary-900 capitalize">
                                {option}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 max-w-2xl mx-auto px-4 sm:px-0">
                <button
                    onClick={onBack}
                    className="flex w-full sm:w-52 justify-center items-center gap-2 py-3 sm:py-0 
                        text-accent-500 font-medium hover:text-accent-700 transition-colors
                        border-2 border-transparent hover:border-accent-500 rounded-regular sm:border-none"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>
                <button
                    onClick={onNext}
                    className={`w-full sm:flex-1 px-6 sm:px-8 py-3 rounded-regular font-medium 
                        transition-colors active:scale-[0.98] ${selectedCare
                            ? 'bg-primary-900 text-utility-white hover:bg-primary-700'
                            : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                        }`}
                    disabled={!selectedCare}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default SelectCareComponent;