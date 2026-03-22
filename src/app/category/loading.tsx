import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <main className="bg-white py-12">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center space-y-4">
                    <Skeleton className="h-16 w-3/4 mx-auto" />
                    <Skeleton className="h-6 w-1/2 mx-auto" />
                </header>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton className="h-64 w-full rounded-2xl" />
                            <Skeleton className="h-8 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}