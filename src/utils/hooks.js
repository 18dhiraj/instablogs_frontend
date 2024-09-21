'useClient'
import app from "@/firebase";
import { getDocs, collection, getFirestore, limit, query, startAfter } from "firebase/firestore";


const getPaginationData = async (last) => {

    console.log('getting Data F ')
    app()   
    const db = getFirestore()

    let _posts = []
    const postsQuery = query(collection(db, "posts"), limit(5));
    const querySnapshot = await getDocs(postsQuery, startAfter(last));
    querySnapshot.forEach((doc) => {
        _posts.push({ ...doc.data(), docID: doc.id })
    });

    return _posts 

}

export default getPaginationData