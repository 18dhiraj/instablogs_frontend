import React from "react";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import app from "@/firebase";
import Allcategories from "@/components/allcategories";

const getCate = async () => {
    app()
    const db = getFirestore()
    let categoriesQuery = query(collection(db, "categories"), orderBy('name'))
    const categoriesSnapshot = await getDocs(categoriesQuery);
    let _category: any = []
    categoriesSnapshot.forEach((doc) => {
        _category.push({ ...doc.data(), docID: doc.id })
    });

    return { cate: _category }
}

const Category = async () => {

    let { cate } = await getCate()

    let lastAlphabet = ''

    let formatedCate: any = []

    cate.map((e: any) => {
        let firstWord: string = e.name.charAt(0)
        if (lastAlphabet == '') {
            formatedCate.push({ [firstWord]: [e] })
            lastAlphabet = firstWord
        } else if (lastAlphabet == firstWord) {
            formatedCate.map((e1: any) => {
                Object.entries(e1).map(([k, v]: any) => {
                    if (k == firstWord) {
                        v.push(e)
                    }
                })
            })
        } else {
            formatedCate.push({ [firstWord]: [e] })
            lastAlphabet = firstWord
        }
    })


    return (
        <div className="px-4">
            <div className="text-xl py-4">Categories</div>
            <div >
                {
                    formatedCate.map((e:any, i: number) => {
                        return (
                            <>
                                <div>
                                    {
                                        Object.entries(e).map(([e1, v1] : any, i1: number) => {
                                            return (
                                                <>
                                                    <div className="my-5 text-xl text-blue underline">{e1}</div>
                                                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 " >
                                                        {
                                                            v1.map((val : any, ival: number) => {
                                                                return <Allcategories e={val} i={ival} />
                                                            })
                                                        }
                                                    </div>
                                                </>
                                            )

                                        })
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div >

    )
}

export default Category

export const revalidate = 100;