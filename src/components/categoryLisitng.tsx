"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CategoryListing = (props: { e: Category, i: number }) => {
    const router = useRouter();
    const { e, i } = props;

    return (
        <div 
            key={e.docID || i} 
            className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl bg-surface-100 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover" 
            onClick={() => router.push(`/category/${e.seo}`)}
        >
            <Image
                src={e.image}
                fill
                className="object-cover transition-transform duration-500 "
                alt={e.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="mb-2 w-fit rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Category
                </span>
                <h3 className="text-xl font-black tracking-tight text-white group-hover:text-brand-300">
                    {e.name}
                </h3>
            </div>
        </div>
    )
}

export default CategoryListing