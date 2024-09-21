'use client'
import React, { useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import SearchComponent from "./SearchComponent";
const Header = () => {

    const router = useRouter()
    const params = useParams()
    const pathName = usePathname();
    const [showNavigation, setShowNavigation] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const onSearchClick = () => {

        // if (showSearch) {
        //     document.body.style.overflow = 'scroll'
        // } else {
        //     window.scrollTo(0, 0)
        //     document.body.style.overflow = 'hidden'
        // }
        setShowSearch(!showSearch)
    }

    // console.log(params)
    // console.log(pathName)

    return (
        <header className={`min-h-[70px] border flex justify-between items-center fixed w-full bg-white top-0 z-10`}>
            <div onClick={() => router.push('/')} className="ml-[3rem] text-[orange] font-bold cursor-pointer" >INSTABLOGS</div>
            <div className="hidden lg:flex justify-end flex-1">
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-[orange] ${pathName == '/' ? "border-[orange] text-[orange] border-b-2" : "text-[black]"} `} href={'/'}>Home</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-[orange] ${params?.category == 'travel' ? "border-[orange] text-[orange] border-b-2" : "text-[black]"} `} href={'/category/travel'}>Travel</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-[orange] ${params?.category == 'technology' ? "border-[orange] text-[orange] border-b-2" : "text-[black]"} `} href={'/category/technology'}>Technology</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-[orange] ${params?.category == 'personal-improvement' ? "border-[orange] text-[orange] border-b-2" : "text-[black]"} `} href={'/category/parenting'}>Parenting</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-[orange] ${pathName == '/category' ? "border-[orange] text-[orange] border-b-2" : "text-[black]"}`} href={'/category'}>All categories</Link>
            </div>
            <div onClick={() => setShowNavigation(!showNavigation)} className="lg:hidden justify-start flex-1 pl-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            {showNavigation && <div className="block lg:hidden  absolute top-[70px] w-[100%] bg-[#fff]">
                <div className="my-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black `} href={'/'}>Home</Link>
                </div>
                <div className="mb-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'travel' ? "border-black border-b-2" : ""} `} href={'/category/travel'}>Travel</Link>
                </div>
                <div className="mb-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'technology' ? "border-black border-b-2" : ""} `} href={'/category/technology'}>Technology</Link>
                </div>
                <div className="mb-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'personal-improvement' ? "border-black border-b-2" : ""} `} href={'/category/parenting'}>Parenting</Link>
                </div>
                <div className="mb-3"  >
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black`} href={'/category'}>All categories</Link>
                </div>
            </div>}
            <div className="mx-[3rem] cursor-pointer">
                <svg onClick={onSearchClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
            {showSearch &&
                    <div onClick={onSearchClick} className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)] z-20 flex justify-center " >
                        <div className=" mt-20">
                            <SearchComponent setShowSearch={onSearchClick} />
                        </div>
                    </div>}
        </header>
    )
}

export default Header