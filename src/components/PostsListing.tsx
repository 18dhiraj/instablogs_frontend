'use client'
import React, { useEffect, useState } from "react";
import { getDocs, collection, limit, query, startAfter, getDoc, orderBy, doc } from "firebase/firestore";
import HomePageCard from "./HomepageCard";
import { db } from "@/firebase";

const PostsListing = (props: { initialPosts: Seo[], lastVisibleId: string }) => {

    const { initialPosts, lastVisibleId, } = props
    const [posts, setPosts] = useState(initialPosts);
    const [lastVisible, setLastVisible] = useState(lastVisibleId);
    const [loading, setLoading] = useState(false);

    const pageSize = 5;

    // Function to fetch the next page
    const loadMorePosts = async () => {
        if (!lastVisible) return
        setLoading(true);
        // Fetch the last document as a cursor
        const lastDocSnap = await getDoc(doc(db, 'posts', lastVisible));

        // Query Firestore for the next set of posts
        const postsRef = collection(db, 'posts');
        const postsQuery = query(postsRef, startAfter(lastDocSnap), limit(pageSize));
        const snapshot = await getDocs(postsQuery);

        // Append the new posts to the existing list
        const newPosts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts((prevPosts: any) => [...prevPosts, ...newPosts]);

        // Update the lastVisible to the last document in the current batch
        const newLastVisible = snapshot.docs[snapshot.docs.length - 1]?.id;
        setLastVisible(newLastVisible);
        setLoading(false);

    };

    // Infinite Scroll: load more posts when user scrolls near the bottom
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            // When scrolled to the bottom
            if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
                loadMorePosts();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, lastVisible])

    return (
        <div>
            {posts.map((e: Seo, i: number) => <HomePageCard e={e} i={i} />)}
        </div>
    )
}

export default PostsListing