import React from 'react'

type Props = {
    progress: number
}

export default function Progress({ progress }: Props) {
    return (
        <div className="h-2 bg-grey-300 dark:bg-dark-bg-600 rounded-full mb-8">
            <div
                className="h-full bg-accent-500 dark:bg-dark-accent-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}