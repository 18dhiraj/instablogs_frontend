import React from "react";
import { db } from "@/firebase";
import { getFirestore, collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import SideListCategoryItem from "./SideListCateogryItem";
import SideListPostItem from "./SideListPostItem";

export const getData = async () => {

    const categoriesQuery = query(collection(db, 'categories'), limit(4))
    const querySnapshot = await getDocs(categoriesQuery);

    let postsQuery = query(collection(db, "posts"), orderBy("dateTime"), limit(4))
    const postsSnapshot = await getDocs(postsQuery);

    let _latest: Seo[] = []
    let _category: Category[] = []
    postsSnapshot.forEach((doc: any) => {
        _latest.push({ ...doc.data(), docID: doc.id })
    });
    querySnapshot.forEach((doc: any) => {
        _category.push({ ...doc.data(), docID: doc.id })
    });

    return { category: _category, latest: _latest }
}

const RightSection = async () => {

    let { category, latest } = await getData()

    return (
        <div className="overflow-hidden ">
            <div className="mb-5  ">
                <div className=" text-sm md:text-xl font-semibold mb-2 p-1 md:p-0 whitespace-break-spaces" >Popular</div>
                <div className="p-2 md:p-4 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#fae8cf]" >
                    {
                        latest.map((e: Seo, i: number) => (
                            <SideListPostItem e={e} i={i} />
                        ))
                    }

                </div >
            </div >
            <div className="mb-5 ">
                <div className="text-sm md:text-xl mb-2 font-semibold whitespace-break-spaces" >Top Categories</div>
                <div className="p-2 md:p-4 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#fae8cf]" >
                    {
                        category.map((e: Category, i: number) => (
                            <SideListCategoryItem e={e} i={i} />
                        ))
                    }

                </div>
            </div >
        </div>
    )
}

export default RightSection