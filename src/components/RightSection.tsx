import React from "react";
import { db } from "@/firebase";
import { getFirestore, collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import SideListPostItem from "./SideListPostItem";

export const getData = async () => {
    let postsQuery = query(collection(db, "posts"), orderBy("dateTime"), limit(4))
    const postsSnapshot = await getDocs(postsQuery);

    let _latest: Seo[] = []
    postsSnapshot.forEach((doc: any) => {
        _latest.push({ ...doc.data(), docID: doc.id })
    });

    return { latest: _latest }
}

const RightSection = async () => {
    let { latest } = await getData()

    return (
        <aside className="relative space-y-12 pl-4">
            {/* Sticky Popular Posts Section */}
            <div className="sticky top-24">
                <h3 className="mb-6 flex items-center text-lg font-black uppercase tracking-widest text-surface-900">
                    <span className="mr-3 h-1.5 w-8 rounded-full bg-brand-500"></span>
                    Popular Posts
                </h3>
                <div className="space-y-6">
                    {latest.map((e: Seo, i: number) => (
                        <SideListPostItem key={i} e={e} i={i} />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default RightSection