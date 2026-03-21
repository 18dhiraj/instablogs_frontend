'use client'
import React, { useState, useEffect } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import SearchComponent from "./SearchComponent";

const Header = () => {
    const router = useRouter()
    const params = useParams()
    const pathName = usePathname();
    const [showNavigation, setShowNavigation] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    // Force scroll to top on path change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    const onSearchClick = () => {
        setShowSearch(!showSearch)
    }

    const navLinks = [
        { label: 'Home', href: '/', isActive: pathName === '/' },
        { label: 'Travel', href: '/category/travel', isActive: params?.category === 'travel' },
        { label: 'Technology', href: '/category/technology', isActive: params?.category === 'technology' },
        { label: 'Parenting', href: '/category/parenting', isActive: params?.category === 'parenting' },
        { label: 'All categories', href: '/category', isActive: pathName === '/category' },
    ]

    return (
        <header className="fixed top-0 z-50 w-full border-b border-surface-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div 
                    onClick={() => router.push('/')} 
                    className="flex cursor-pointer items-center space-x-2 text-xl font-black tracking-tighter text-brand-500 transition hover:text-brand-600"
                >
                    <span>INSTABLOGS</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:items-center lg:space-x-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                                link.isActive ? "text-brand-500" : "text-surface-600"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button 
                        onClick={onSearchClick}
                        className="rounded-full p-2 text-surface-600 transition-colors hover:bg-surface-100 hover:text-brand-500"
                        aria-label="Search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                    <button 
                        onClick={() => setShowNavigation(!showNavigation)}
                        className="rounded-lg p-2 text-surface-600 transition-colors hover:bg-surface-100 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {showNavigation && (
                <div className="border-b border-surface-200 bg-white lg:hidden">
                    <div className="space-y-1 px-4 py-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href}
                                onClick={() => setShowNavigation(false)}
                                href={link.href}
                                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                                    link.isActive ? "bg-brand-50 text-brand-500" : "text-surface-600 hover:bg-surface-50"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            {showSearch && (
                <div className="fixed inset-0 z-[60] h-screen w-screen bg-surface-900/60 backdrop-blur-sm transition-all duration-300">
                    <div className="absolute inset-x-0 top-16 pt-6">
                        <div className="mx-auto w-full max-w-xl px-4">
                            <div className="relative flex items-center">
                                <div className="flex-1">
                                    <SearchComponent setShowSearch={setShowSearch} />
                                </div>
                                <button 
                                    onClick={onSearchClick}
                                    className="ml-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header