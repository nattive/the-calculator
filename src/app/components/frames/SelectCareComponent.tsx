import { ChevronLeft } from "lucide-react";
import Progress from "../ui/Progress";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";

type Props = {
    selectedCare?: string;
    selectedCountry?: string;
    setSelectedCare: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
    careOptions: string[]
}

const SelectCareComponent = ({ selectedCountry, careOptions, selectedCare, setSelectedCare, onNext, onBack }: Props) => {

    return (
        <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={60} />

            <div className="mb-8 sm:mb-12">
                <Typography className="capitalize-first" variant="h1">
                    {
                        ["United Kingdom", "Australia"].includes(selectedCountry!) ? "What's your go-to holiday pet care?" : "What's your go-to vacation pet care?"
                    }

                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl">
                {careOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => setSelectedCare(option)}
                        className={`p-3 sm:p-4 rounded-regular border-2 transition-all hover:shadow-sm ${selectedCare === option
                            ? 'border-primary-900 bg-primary-300'
                            : 'border-grey-300 hover:border-primary-500'
                            }`}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 w-full">

                            <Typography variant="caption">
                                {option}
                            </Typography>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex   justify-between items-center text-accent-500 gap-4 mt-8  mx-auto">
                <Button
                    variant="link"
                    onClick={onBack}
                    className="group w-[50%]"
                >
                    <ChevronLeft className="w-5 h-5 text-accent-500" />
                    Back
                </Button>
                <Button
                    disabled={!selectedCare}
                    onClick={onNext}
                    variant="primary"
                >
                    Next
                </Button>
            </div>
        </main>
    );
};

export default SelectCareComponent;