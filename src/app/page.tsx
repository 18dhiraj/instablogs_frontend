import React from "react";
import { getDocs, collection, getFirestore, limit, query } from "firebase/firestore";
import CategoryListing from "@/components/categoryLisitng";
import RightSection from "@/components/RightSection";
import PostsListing from "@/components/PostsListing";
import { db } from "@/firebase";

const getData = async () => {
  const postsQuery = query(collection(db, "posts"), limit(5));
  const querySnapshot = await getDocs(postsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  const categoriesQuery = query(collection(db, 'categories'), limit(3));
  const categoriesSnapshot = await getDocs(categoriesQuery);
  let _posts: Seo[] = []
  let _category: Category[] = []
  querySnapshot.forEach((doc: any) => {
    _posts.push({ ...doc.data(), docID: doc.id })
  });
  categoriesSnapshot.forEach((doc: any) => {
    _category.push({ ...doc.data(), docID: doc.id })
  });

  return { posts: _posts, cate: _category, lastVisible }
}

export default async () => {

  let { posts , cate, lastVisible } = await getData();

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Featured Categories Row */}
        <section className="mb-16">
          <div className="mb-8 flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-black tracking-tighter text-surface-900 md:text-4xl">
                Explore Categories
              </h2>
              <p className="text-surface-500">Discover stories curated for your interests.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cate.map((e: Category, i: number) => (
              <CategoryListing key={e.docID || i} e={e} i={i} />
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Posts Column */}
          <div className="lg:col-span-2">
            <div className="mb-8 space-y-1">
              <h2 className="text-3xl font-black tracking-tighter text-surface-900 md:text-4xl">
                Latest Stories
              </h2>
              <p className="text-surface-500">Fresh updates from around the world.</p>
            </div>
            <PostsListing initialPosts={posts} lastVisibleId={lastVisible?.id} />
          </div>

          {/* Sidebar Column */}
          <div className="hidden lg:block h-full">
            <RightSection showCategories={false} />
          </div>
        </div>
      </div>
    </main>
  )
}

export const revalidate = 100;
