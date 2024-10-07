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

export default async function (repo: { params: { category: string } }) {

    let posts = await getdata(repo.params.category)
    return (
        <>
            <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-[80px] m-5" >
                {
                    posts.props.map((e: Seo, i: number) => <HomePageCard e={e} i={i} />)
                }
            </div>
        </>
    );
}
