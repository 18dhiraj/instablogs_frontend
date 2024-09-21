'use client'
import app from "@/firebase";
import { collection, endAt, getDocs, getFirestore, limit, orderBy, query, startAt, where } from "firebase/firestore";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchComponent = (props: any) => {

    const [searchResults, setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('')

    const { setShowSearch } = props
    const router = useRouter()

    const debounce = async (text: string) => {
        setSearchText(text)
        app()
        const db = getFirestore()
        let searchQuery = query(collection(db, "posts"), orderBy('title'), startAt(text), endAt(text + '~'), limit(5))
        let _searchResults = await getDocs(searchQuery);
        let _searchRes: any = []
        _searchResults.forEach((doc) => {
            _searchRes.push({ ...doc.data(), docID: doc.id })
        });

        setSearchResults(_searchRes)
    }

    const onSearchItemSelect = (e: any) => {
        router.push(`/category/${e.category}/${e.seo}`)
        setShowSearch(false)
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className=" shadow p-3 px-5 bg-[#fff] rounded shadow w-[300px]">
            <input className="border p-1 rounded w-[100%]" placeholder="Search" onChange={(e) => debounce(e.target.value)} value={searchText} />
            <div className="mt-3">
                {searchResults.map((e: any) => {
                    return (
                        <div>
                            <Link href={`/category/${e.category}/${e.seo}`} className="p-1 hover:bg-[#eee] rounded" onClick={() => onSearchItemSelect(e)} >{e.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchComponent