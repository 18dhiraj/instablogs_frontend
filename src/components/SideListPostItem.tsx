"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideListPostItem = (props: { e: Seo, i: number }) => {
    const { e, i } = props
    const router = useRouter()
    
    return (
        <div 
            onClick={() => router.push(`/category/${e.category}/${e.seo}`)} 
            className="group flex cursor-pointer items-start space-x-4 transition-all"
        >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="flex-1 space-y-1">
                <h4 className="line-clamp-2 text-sm font-bold leading-snug text-surface-900 transition-colors group-hover:text-brand-500">
                    {e.title}
                </h4>
                <div className="text-[10px] font-bold uppercase tracking-wider text-brand-500">
                    {e.category}
                </div>
            </div>
        </div>
    )
}

export default SideListPostItem