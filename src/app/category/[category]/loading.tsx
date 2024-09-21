import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function loading() {
    return (
        <div className="pt-10">
            <div className='p-10 grid grid-cols-1 lg:grid-cols-2 gap-[80px]'>
                <div className='mb-2'>
                    <div className='w-2/3 mb-2'>
                        <Skeleton className="w-[100px] h-[50px] bg-[lightgray] mb-5 rounded-lg" />
                    </div>
                    <Skeleton className="w-[60%] m-[auto] h-[350px] bg-[lightgray] mb-5 rounded-lg" />
                    <Skeleton className="  h-[200px] bg-[lightgray] mb-5 rounded-lg" />
                </div>
                <div className='mb-2'>
                    <div className='w-2/3 mb-2'>
                        <Skeleton className="w-[100px] h-[50px] bg-[lightgray] mb-5 rounded-lg" />
                    </div>
                    <Skeleton className="w-[60%] m-[auto] h-[350px] bg-[lightgray] mb-5 roundedv-lg" />
                    <Skeleton className="  h-[200px] bg-[lightgray] mb-5 rounded-lg" />
                </div>
            </div>
        </div>
    )
}