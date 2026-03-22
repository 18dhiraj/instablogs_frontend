import React from "react";
import { db } from "@/firebase";
import { getFirestore, collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import SideListPostItem from "./SideListPostItem";
import SideListCategoryItem from "./SideListCateogryItem";

export const getData = async () => {
    let postsQuery = query(collection(db, "posts"), orderBy("dateTime"), limit(4))
    const postsSnapshot = await getDocs(postsQuery);

    let _latest: Seo[] = []
    postsSnapshot.forEach((doc: any) => {
        _latest.push({ ...doc.data(), docID: doc.id })
    });

    let categoryQuery = query(collection(db, "categories"), limit(4))
    const categorySnapshot = await getDocs(categoryQuery);

    let _categories: Category[] = []
    categorySnapshot.forEach((doc: any) => {
        _categories.push({ ...doc.data(), docID: doc.id })
    });

    return { latest: _latest, categories: _categories }
}

const RightSection = async ({ showCategories = true }: { showCategories?: boolean }) => {
    let { latest, categories } = await getData()

    return (
        <aside className="relative h-full space-y-12 pl-4">
            {/* Sticky Popular Posts Section */}
            <div className="sticky top-24 space-y-12">
                <div>
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

                {showCategories && (
                    <div>
                        <h3 className="mb-6 flex items-center text-lg font-black uppercase tracking-widest text-surface-900">
                            <span className="mr-3 h-1.5 w-8 rounded-full bg-brand-500"></span>
                            Top Categories
                        </h3>
                        <div className="space-y-4">
                            {categories.map((e: Category, i: number) => (
                                <SideListCategoryItem key={i} e={e} i={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default RightSection