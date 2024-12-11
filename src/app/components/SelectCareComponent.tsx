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
        <main className="max-w-4xl mx-auto p-6 mt-8">
            <Progress progress={30} />

            <div className="mb-12">
                <h1 className="text-3xl font-bold text-primary-700 mb-4">
                    What&apos;s your go-to holiday pet care?
                </h1>
            </div>

            <div className="max-w-2xl space-y-4 mb-12">
                {careOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => setSelectedCare(option)}
                        className="w-full text-left"
                    >
                        <div className={`
                            flex items-center p-4 rounded-regular border-2 transition-all
                            ${selectedCare === option
                                ? 'border-primary-500 bg-primary-300/10'
                                : 'border-grey-300 hover:border-primary-500'
                            }
                        `}>
                            <div className="flex items-center justify-center mr-4">
                                <div className={`
                                    w-6 h-6 rounded-full border-2 flex items-center justify-center
                                    ${selectedCare === option
                                        ? 'border-primary-500'
                                        : 'border-grey-400'
                                    }
                                `}>
                                    {selectedCare === option && (
                                        <div className="w-3 h-3 rounded-full bg-primary-500" />
                                    )}
                                </div>
                            </div>
                            <span className="text-lg text-primary-900 capitalize">{option}</span>
                        </div>
                    </button>
                ))}
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
                    className={`px-8 py-3 flex-1 rounded-regular font-medium transition-colors ${selectedCare
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