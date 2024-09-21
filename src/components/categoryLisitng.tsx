"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CategoryListing = (props: any) => {

    const router = useRouter();
    const { e } = props;

    return (
        <div className="mb-5 relative flex justify-center items-center cursor-pointer" onClick={() => router.push(`/category/${e.seo}`)}>
            <Image
                src={e.image}
                className="object-cover max-h-[100px] h-[100px] md:max-h-[200px] md:h-[170px] w-[100%] rounded-lg hover:scale-105 ease duration-200 "
                alt={e.seo}
                width={300}
                height={100}
            />
            <div className='text-[10px] md:text-[12px] absolute bottom-[-10px] bg-[orange] px-2 text-[#fff]' >
                {e.name}
            </div>
        </div>
    )
}

export default CategoryListing