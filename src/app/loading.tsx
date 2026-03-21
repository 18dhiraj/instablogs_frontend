import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <main className="min-h-screen bg-white py-12">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/* Categories Skeleton */}
                <section className="mb-16">
                    <div className="mb-8 h-10 w-64">
                        <Skeleton height="100%" />
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <Skeleton key={i} className="h-64 rounded-2xl" />
                        ))}
                    </div>
                </section>

                {/* Main Content Grid Skeleton */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="h-10 w-64">
                            <Skeleton height="100%" />
                        </div>
                        {[1, 2].map((i) => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="h-64 w-full rounded-2xl" />
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton count={3} className="h-4" />
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:block space-y-12">
                        <Skeleton className="h-8 w-40" />
                        <div className="space-y-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex gap-4">
                                    <Skeleton className="h-16 w-16 rounded-lg" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="h-4" />
                                        <Skeleton className="h-4 w-20" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}