import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function loading() {
    return (
        <div className="px-4">
            <div className="text-xl py-4">Categories</div>
            <div className="grid gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
                <Skeleton className="h-[180px] rounded-lg bg-[lightgray]" />
            </div>
        </div >
    )
}