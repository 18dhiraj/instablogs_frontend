import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function () {
    return (
        <div className="pr-2 pl-5 p-md-10 pt-1 h-[550px]">
            <div className="grid grid-cols-4 md:grid-cols-3 gap-[20px] md:gap-[80px] mt-10">
                <div className=" col-span-3 md:col-span-2  h-[400px]">
                    <div className='w-2/3' >
                        <Skeleton className='h-[50px] mb-5' />
                    </div>
                    <Skeleton className='h-[400px] rounded-lg' />
                </div>
                <div className="col-span-1 " >
                    <div className='w-2/3' >
                        <Skeleton className='h-[50px] w-10 mb-5' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                        <Skeleton className='h-[150px] col-span-2 md:col-span-1 ' />
                        <Skeleton className='h-[150px] col-span-2 md:col-span-1 ' />
                        <Skeleton className='h-[150px] col-span-2 md:col-span-1 ' />
                        <Skeleton className='h-[150px] col-span-2 md:col-span-1 ' />
                    </div>
                </div>
            </div>
        </div>
    )
} 