import Image from "next/image";
import MoreLikeThisCard from "@/components/MoreLikeThisCard";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import RightSection from "@/components/RightSection";
import { db } from "@/firebase";

const getdata = async (seo: string) => {

    const q = query(collection(db, "posts"), where("seo", "==", seo));
    const querySnapshot = await getDocs(q);
    let _posts: any = []
    querySnapshot.forEach((doc) => {

        _posts.push({ ...doc.data(), docID: doc.id })
    });

    if (_posts.length === 0) {
        return { posts: [], more: [] }
    }

    const moreQ = query(collection(db, "posts"), where("category", "==", _posts[0].category));
    const moreData = await getDocs(moreQ);
    let _more: any = []
    moreData.forEach((doc) => _more.push({ ...doc.data(), docID: doc.id }));
    return { posts: _posts, more: _more }
}


const Details = async (props: { params: Promise<{ seo: string }> }) => {

    const { seo } = await props.params;
    let detailss = await getdata(seo);
    
    if (!detailss.posts || detailss.posts.length === 0) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black tracking-tighter text-surface-900">Post not found</h1>
                    <p className="text-surface-500">The story you're looking for doesn't exist.</p>
                </div>
            </div>
        )
    }

    let details: Product = detailss.posts[0];
    let moreLike = detailss.more;

    return (
        <main className="bg-white pb-20 pt-8">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <article className="lg:col-span-2">
                        <header className="mb-10 space-y-4">
                            <div className="flex items-center space-x-2">
                                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-500">
                                    {details.category}
                                </span>
                            </div>
                            <h1 className="text-3xl font-black leading-tight tracking-tighter text-surface-900 md:text-5xl">
                                {details.title}
                            </h1>
                            <p className="text-lg leading-relaxed text-surface-500 italic">
                                {details.summary}
                            </p>
                        </header>

                        <div className="relative mb-10 aspect-video overflow-hidden rounded-3xl shadow-soft">
                            <Image
                                src={details.image}
                                alt={details.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div 
                            className="prose prose-lg max-w-none text-surface-800 prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-surface-900 prose-p:leading-relaxed prose-a:text-brand-500 hover:prose-a:text-brand-600 prose-img:rounded-2xl"
                            dangerouslySetInnerHTML={{ __html: details?.description }}
                        />

                        <section className="mt-20 border-t border-surface-200 pt-16">
                            <h2 className="mb-10 text-3xl font-black tracking-tighter text-surface-900">
                                More Stories Like This
                            </h2>
                            <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
                                {moreLike.map((e: MoreLikeThis, i: number) => {
                                    return (
                                        <div key={i} className="min-w-[280px] flex-shrink-0">
                                            <MoreLikeThisCard e={e} i={i} />
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </article>

                    <aside className="hidden lg:block">
                        <RightSection />
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Details