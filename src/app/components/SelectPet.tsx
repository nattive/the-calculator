import { Pet } from "@/utils/types";
import Progress from "./Progress";

type Props = {
    selectedPet?: string;
    setSelectedPet: (value: string) => void;
    onNext: () => void;
    availablePets: Pet[]
}

const SelectPetComponent = ({ availablePets, selectedPet, setSelectedPet, onNext }: Props) => {
    return (
        <main className="max-w-4xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8">
            <Progress progress={5} />

            <div className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-2 sm:mb-4">
                    What pet do you have?
                </h1>
                <p className="text-sm sm:text-base text-grey-700">
                    Right now, we can only compare costs for one pet.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl mx-auto">
                {availablePets.map((pet) => (
                    <button
                        key={pet.id}
                        onClick={() => setSelectedPet(pet.id)}
                        className={`p-3 sm:p-4 rounded-regular border-2 transition-all hover:shadow-sm ${selectedPet === pet.id
                            ? 'border-primary-500 bg-primary-300/10'
                            : 'border-grey-300 hover:border-primary-500'
                            }`}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 w-full">
                            <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center">
                                <img
                                    src={pet.icon}
                                    alt={pet.name}
                                    className="w-5 sm:w-6 h-5 sm:h-6 transition-transform group-hover:scale-105"
                                />
                            </div>
                            <span className="text-base sm:text-lg text-primary-900">
                                {pet.name}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 max-w-2xl mx-auto px-4 sm:px-0">
                <div className="hidden sm:block w-32" /> {/* Desktop spacer */}
                <button
                    onClick={onNext}
                    className={`w-full sm:flex-1 px-6 sm:px-8 py-3 rounded-regular font-medium transition-colors ${selectedPet
                        ? 'bg-primary-900 text-utility-white hover:bg-primary-700'
                        : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                        }`}
                    disabled={!selectedPet}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default SelectPetComponent;