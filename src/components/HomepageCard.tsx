"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePageCard = (data: { e: Seo, i: number }) => {
    const router = useRouter();
    const { image, title, summary, category, seo } = data.e

    const navigate = () => {
        router.push(`/category/${category}/${seo}`)
    }

    return (
        <article className="group mb-12 flex flex-col rounded-2xl bg-white p-4 transition-all hover:shadow-hover">
            <div 
                className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl" 
                onClick={navigate}
            >
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                        {category}
                    </span>
                </div>
            </div>
            
            <div className="flex flex-1 flex-col py-6 px-2">
                <h2 
                    className="cursor-pointer text-xl font-bold leading-tight text-surface-900 transition-colors hover:text-brand-500 md:text-2xl" 
                    onClick={navigate}
                >
                    {title}
                </h2>
                
                {/* Added spacing here */}
                <div className="mt-5 mb-6">
                    <p className="line-clamp-3 text-base leading-relaxed text-surface-600">
                        {summary}
                    </p>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                    <button 
                        onClick={navigate}
                        className="group/btn flex items-center text-sm font-bold text-brand-500 transition-all hover:text-brand-600"
                    >
                        Read More 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default HomePageCard