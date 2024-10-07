"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Allcategories = (props: { e: Category, i: number }) => {

    const { e, i } = props;
    const router = useRouter()
    return (
        <div className="h-[200px] w-[300px] cursor-pointer" onClick={() => router.push(`/category/${e.seo}`)} >
            <Image
                src={e.image}
                className="object-cover max-h-[180px] h-[180px] w-[100%] rounded-lg hover:scale-105 ease duration-200"
                alt={e.seo}
                width={400}
                height={400}
            />
            <div className="my-2">
                {e.name}
            </div>
        </div>
    )
}

export default Allcategories