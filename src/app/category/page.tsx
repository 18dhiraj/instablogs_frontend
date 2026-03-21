import React from "react";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import Allcategories from "@/components/allcategories";
import { db } from "@/firebase";

const getCate = async () => {
    let categoriesQuery = query(collection(db, "categories"), orderBy('name'))
    const categoriesSnapshot = await getDocs(categoriesQuery);
    let _category: Category[] = []
    categoriesSnapshot.forEach((doc: any) => {
        _category.push({ ...doc.data(), docID: doc.id })
    });

    // Group categories by the first letter
    const groupedCategories = _category.reduce((acc, category) => {
        const firstLetter = category.name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(category);
        return acc;
    }, {} as Record<string, Category[]>);

    return { groupedCategories };
}

const Category = async () => {
    let { groupedCategories } = await getCate();

    return (
        <main className="bg-white py-12">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-black tracking-tighter text-surface-900 md:text-6xl">
                        All Categories
                    </h1>
                    <p className="mt-4 text-lg text-surface-500">
                        Browse our full collection of categories.
                    </p>
                </header>

                <div className="space-y-12">
                    {Object.entries(groupedCategories).map(([letter, categories]) => (
                        <section key={letter}>
                            <h2 className="mb-8 text-3xl font-black tracking-tighter text-brand-500">
                                {letter}
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {categories.map((e: Category, i: number) => (
                                    <Allcategories key={e.docID || i} e={e} i={i} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Category;
export const revalidate = 100;