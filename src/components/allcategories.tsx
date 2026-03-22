"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Allcategories = (props: { e: Category, i: number }) => {
    const { e, i } = props;
    const router = useRouter()

    return (
        <div 
            className="group relative h-40 w-full cursor-pointer overflow-hidden rounded-xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover"
            onClick={() => router.push(`/category/${e.seo}`)}
        >
            <Image
                src={e.image}
                alt={e.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="line-clamp-2 text-base font-black tracking-tight text-white transition-colors group-hover:text-brand-300">
                    {e.name}
                </h3>
            </div>
        </div>
    )
}

export default Allcategories