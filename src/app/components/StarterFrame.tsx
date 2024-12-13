import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function StarterFrame({ handleGetStarted }: { handleGetStarted: () => void }) {

    return (
        <div className="max-w-2xl mx-auto px-4  leading-tight my-auto flex align-middle  border-grey-400 shadow-md">
            <div className="max-w-3xl py-5 ml-10">
                <h1 className="text-3xl  font-bold text-primary-700">
                    Work out your pet care savings
                </h1>

                <p className=" my-10 text-lg text-grey-900">
                    See how much you could save on vacation pet care with TrustedHousesitters.
                </p>

                <button
                    onClick={handleGetStarted}
                    className="mt-8 bg-primary-900 text-utility-white px-10 py-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 text-lg font-medium"
                >
                    Get Started
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
