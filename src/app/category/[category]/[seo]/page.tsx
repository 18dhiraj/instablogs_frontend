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

    const moreQ = query(collection(db, "posts"), where("category", "==", _posts[0].category));
    const moreData = await getDocs(moreQ);
    let _more: any = []
    moreData.forEach((doc) => _more.push({ ...doc.data(), docID: doc.id }));
    return { posts: _posts, more: _more }
}

const Details = async (props: any) => {

    const { params } = props;
    let detailss = await getdata(params.seo);
    let details = detailss.posts[0];
    let moreLike = detailss.more;

    return (
        <div className="px-4 p-md-10 pt-1">
            <div className="grid grid-cols-6 md:grid-cols-3 gap-[10px] md:gap-[40px] mt-10">
                <div className=" col-span-4 md:col-span-2">
                    <h1 className="fs-[20px] text-2xl font-semibold mb-10" >{details.title}</h1>
                    <div className="" >
                        <Image
                            src={details.image}
                            alt={details.title}
                            className="object-contain h-auto max-h-[400px] w-[320] rounded-lg"
                            width={700}
                            height={400}
                        />
                    </div>
                    <div className="my-4 text-md " >
                        {details.summary}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: details?.description }}>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1" >
                    <RightSection />
                </div>
            </div>
            <div>
                <h1 className="fs-[20px] text-2xl font-semibold my-10 " >More like this</h1>
                <div className="flex overflow-x-scroll">
                    {moreLike.map((e: any, i: number) => {
                        return <MoreLikeThisCard e={e} i={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Details