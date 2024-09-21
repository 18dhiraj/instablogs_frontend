import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function () {
    return (
        <div className="pt-10 px-4" >
            <div className="grid grid-cols-3 gap-[20px] md:gap-[80px]">
                <div className="col-span-2">
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mb-4" >
                        {/* {cate.map((e: any, i: number) => <CategoryListing e={e} i={i} />)} */}
                        <Skeleton className="h-[170px] ronunded-lg bg-[lightgray]" />
                        <Skeleton className="h-[170px] ronunded-lg bg-[lightgray]" />
                        <Skeleton className="h-[170px] ronunded-lg bg-[lightgray]" />
                    </div>
                    <div>
                        {/* {posts.map((e: any, i: number) => <HomePageCard e={e} i={i} />)} */}
                        <Skeleton className="bg-[lightgray] ronunded-lg mb-5 h-[50px] w-[70%] rounded my-10 " />
                        <Skeleton className="bg-[lightgray] ronunded-lg mb-5 h-[300px] w-[80%] m-[auto] rounded " />
                        <Skeleton className="bg-[lightgray] ronunded-lg mb-5 h-[200px] rounded " />
                    </div>
                </div>
                <div className="col-span-1" >
                    <div>

                        <div className='w-2/3 mb-5' >
                            <Skeleton className='h-[50px]' />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-5" >
                            <Skeleton className="h-[120px] rounded-lg bg-[lightgray]" />
                            <Skeleton className="h-[120px] rounded-lg bg-[lightgray]" />
                            <Skeleton className="h-[120px] rounded-lg bg-[lightgray]" />
                            <Skeleton className="h-[120px] rounded-lg bg-[lightgray]" />
                        </div >
                    </div>
                    <div>

                        <div className='w-2/3 mb-5' >
                            <Skeleton className='h-[50px]' />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5" >
                            <Skeleton className="h-[200px] rounded-lg bg-[lightgray] mb-5" />
                            <Skeleton className="h-[200px] rounded-lg bg-[lightgray] mb-5" />
                            <Skeleton className="h-[200px] rounded-lg bg-[lightgray] mb-5" />
                            <Skeleton className="h-[200px] rounded-lg bg-[lightgray] mb-5" />
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}