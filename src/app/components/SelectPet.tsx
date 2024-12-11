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
        <main className="max-w-4xl mx-auto p-6 mt-8">
            <Progress progress={5} />

            <div className="mb-12">
                <h1 className="text-3xl font-bold text-primary-700 mb-4">What pet do you have?</h1>
                <p className="text-grey-700">Right now, we can only compare costs for one pet.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl">
                {availablePets.map((pet) => (
                    <button
                        key={pet.id}
                        onClick={() => setSelectedPet(pet.id)}
                        className={`p-4 rounded-regular border-2 transition-all ${selectedPet === pet.id
                            ? 'border-primary-500 bg-primary-300'
                            : 'border-grey-300 hover:border-primary-500'
                            }`}
                    >
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img
                                    src={pet.icon}
                                    alt={pet.name}
                                    className={`w-6 h-6 transition-colors`}
                                />
                            </div>
                            <span className="text-lg text-primary-900">{pet.name}</span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex justify-between items-center mt-8 max-w-2xl">
                <div className="w-52" /> {/* Spacer for layout balance */}
                <button
                    onClick={onNext}
                    className={`px-8 py-3 flex-1 rounded-regular font-medium transition-colors ${selectedPet
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