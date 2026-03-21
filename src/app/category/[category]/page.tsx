import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import HomePageCard from "@/components/HomepageCard";
import { db } from "@/firebase";

const getdata = async (cate: string) => {
    let q = query(collection(db, 'posts'), where('category', "==", cate))
    const querySnapshot = await getDocs(q);
    let _posts: Seo[] = []
    querySnapshot.forEach((doc: any) => _posts.push({ ...doc.data(), docID: doc.id }));
    return { props: _posts }
}

export default async function (repo: { params: Promise<{ category: string }> }) {
    const { category } = await repo.params;
    let posts = await getdata(category);

    return (
        <main className="bg-white py-12">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-black tracking-tighter text-surface-900 md:text-6xl">
                        Category: <span className="text-brand-500 capitalize">{category.replace(/-/g, ' ')}</span>
                    </h1>
                    <p className="mt-4 text-lg text-surface-500">
                        Showing all stories from the "{category.replace(/-/g, ' ')}" category.
                    </p>
                </header>

                {posts.props.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.props.map((e: Seo, i: number) => (
                            <HomePageCard e={e} i={i} />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[40vh] flex-col items-center justify-center space-y-4 rounded-2xl bg-surface-50 p-8 text-center">
                        <h2 className="text-3xl font-black tracking-tighter text-surface-900">No Stories Yet</h2>
                        <p className="max-w-md text-surface-500">
                            There are currently no stories in this category. Check back soon for new updates!
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
