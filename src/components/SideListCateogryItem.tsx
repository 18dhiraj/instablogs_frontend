"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideListCategoryItem = (props: { e: Category, i: number }) => {
    const { e, i } = props
    const router = useRouter()

    return (
        <div 
            onClick={() => router.push(`/category/${e.seo}`)} 
            className="group relative h-24 w-full cursor-pointer overflow-hidden rounded-xl bg-surface-200 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover"
        >
            <Image
                src={e.image}
                alt={e.name}
                fill
                className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-3">
                <span className="text-xs font-black uppercase tracking-widest text-white transition-colors group-hover:text-brand-300">
                    {e.name}
                </span>
            </div>
        </div>
    )
}

export default SideListCategoryItem