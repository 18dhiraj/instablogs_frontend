'use client'
import { collection, endAt, getDocs, limit, orderBy, query, startAt } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase";

const SearchComponent = (props: { setShowSearch: (show: boolean) => void }) => {

    const [searchResults, setSearchResults] = useState<Seo[]>([])
    const [searchText, setSearchText] = useState('')
    const searchRef = useRef<HTMLInputElement>(null)
    const { setShowSearch } = props
    const router = useRouter()

    const handleSearch = async (text: string) => {
        setSearchText(text)
        if (!text.trim()) {
            setSearchResults([])
            return
        }
        let searchQuery = query(collection(db, "posts"), orderBy('title'), startAt(text), endAt(text + '~'), limit(5))
        let _searchResults = await getDocs(searchQuery);
        let _searchRes: Seo[] = []
        _searchResults.forEach((doc: any) => {
            _searchRes.push({ ...doc.data(), docID: doc.id })
        });
        setSearchResults(_searchRes)
    }

    const onSearchItemSelect = (e: Seo) => {
        router.push(`/category/${e.category}/${e.seo}`)
        setShowSearch(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Enter') {
            onSearchItemSelect(searchResults[index]);
        }
    }

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus()
        }
    }, [])

    return (
        <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
            <div className="flex items-center border-b border-surface-200 px-6 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                    ref={searchRef} 
                    className="w-full border-none bg-transparent px-4 py-2 text-lg text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-0" 
                    placeholder="Search for stories..." 
                    onChange={(e) => handleSearch(e.target.value)} 
                    value={searchText} 
                />
            </div>
            
            {searchResults.length > 0 && (
                <div className="max-h-[300px] overflow-y-auto py-2">
                    {searchResults.map((e: Seo, i: number) => (
                        <div 
                            key={i}
                            tabIndex={0}
                            className="flex cursor-pointer items-center px-6 py-3 transition-colors hover:bg-surface-50 focus:bg-surface-100 outline-none"
                            onClick={() => onSearchItemSelect(e)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        >
                            <div className="flex-1">
                                <p className="font-bold text-surface-900">{e.title}</p>
                                <p className="text-xs uppercase tracking-widest text-brand-500">{e.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {searchText && searchResults.length === 0 && (
                <div className="px-6 py-8 text-center text-surface-500">
                    No results found for "{searchText}"
                </div>
            )}
        </div>
    )
}

export default SearchComponent