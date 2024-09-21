"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideListCategoryItem = (props : any) => {

    let { e } = props
    const router = useRouter()
    return (
        <div className="cursor-pointer m-1 mb-0" onClick={() => router.push(`/category/${e.seo}`)} >
            <Image
                src={e.image}
                alt="category"
                className="object-cover h-[70px] sm:h-[90px] md:h-[120px] w-[100%] rounded-lg hover:scale-105 hover:rounded-lg ease duration-200 "
                width={200}
                height={100}
            />
            <div className="text-[10px] md:text-sm leading-[12px] md:leading-tight mt-2">{e.name}</div>
        </div>
    )
}

export default SideListCategoryItem