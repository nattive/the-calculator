import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function StarterFrame({ handleGetStarted }: { handleGetStarted: () => void }) {
    return (
        <div className="min-h-[calc(100vh-70px)] flex items-center justify-center px-4 py-8 md:py-12">
            <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 leading-tight shadow-md border border-grey-400 rounded-lg">
                <div className="max-w-3xl mx-4 sm:mx-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700">
                        Work out your pet care savings
                    </h1>

                    <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg text-grey-900">
                        See how much you could save on vacation pet care with TrustedHousesitters.
                    </p>

                    <button
                        onClick={handleGetStarted}
                        className="w-full sm:w-auto mt-6 sm:mt-8 bg-primary-900 text-utility-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center sm:justify-start gap-2 text-base sm:text-lg font-medium"
                    >
                        Get Started
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}