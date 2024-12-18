import { Pet } from "@/utils/types";
import Progress from "../ui/Progress";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";

type Props = {
    selectedPet?: string;
    setSelectedPet: (value: string) => void;
    onNext: () => void;
    availablePets: Pet[]
}

const SelectPetComponent = ({ availablePets, selectedPet, setSelectedPet, onNext }: Props) => {
    return (
        <main className="max-w-3xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={5} />

            <div className="mb-8 sm:mb-12">
                <Typography variant="h1">
                    What pet do you have?
                </Typography>
                <Typography variant="body">
                    Right now, we can only compare costs for one pet.
                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl">
                {availablePets.map((pet) => (
                    <button
                        key={pet.id}
                        onClick={() => setSelectedPet(pet.id)}
                        className={`p-3 sm:p-4 rounded-regular border-2 transition-all hover:shadow-sm ${selectedPet === pet.id
                            ? 'border-primary-500 bg-primary-300'
                            : 'border-grey-300 hover:border-primary-500'
                            }`}
                    >
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center">
                                <img
                                    src={pet.icon}
                                    alt={pet.name}
                                    className="w-5 sm:w-6 h-5 sm:h-6 transition-transform group-hover:scale-105"
                                />
                            </div>
                            <Typography variant="caption">
                                {pet.name}
                            </Typography>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex   justify-between items-center gap-4 mt-8  mx-auto px-4 sm:px-0">
                <Button
                    variant="link"
                    disabled
                    // onClick={onBack} 
                    className="group w-[50%]"
                >
                    <ChevronLeft className="w-5 h-5 text-accent-500" />
                    Back
                </Button>
                <Button
                    disabled={!selectedPet}
                    onClick={onNext}
                    variant="primary"
                >
                    Next
                </Button>
            </div>
        </main>
    );
};

export default SelectPetComponent;