"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MoreLikeThisCard = (props: { e: MoreLikeThis, i: number }) => {
    const { e } = props
    const router = useRouter();

    const navigate = () => {
        router.push(`/category/${e.category}/${e.seo}`)
    }
    
    return (
        <div 
            onClick={navigate}
            className="group cursor-pointer space-y-3"
        >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-soft">
                <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-500">
                    {e.category}
                </span>
                <h4 className="line-clamp-2 text-sm font-bold leading-tight text-surface-900 transition-colors group-hover:text-brand-500">
                    {e.title}
                </h4>
            </div>
        </div>
    )
}

export default MoreLikeThisCard