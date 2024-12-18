import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function StarterFrame({ handleGetStarted }: { handleGetStarted: () => void }) {
    return (
        <div className="min-h-[calc(100vh-70px)] flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8 leading-tight">
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-4">
                        Work out your pet care savings
                    </h1>

                    <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-grey-900">
                        See how much you could save on vacation pet care with TrustedHousesitters.
                    </p>

                    <button
                        onClick={handleGetStarted}
                        className="mt-8 sm:mt-10 bg-primary-900 text-utility-white px-8 sm:px-10 py-4 
                            rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 
                            text-base sm:text-lg font-semibold mx-auto sm:mx-0 w-full sm:w-auto
                            justify-center sm:justify-start"
                    >
                        Get Started
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}