import React from "react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const links = [
        { label: 'All Categories', href: '/category' },
        { label: 'Technology', href: '/category/technology' },
        { label: 'Travel', href: '/category/travel' },
        { label: 'Food', href: '/category/food' },
        { label: 'Health', href: '/category/health' },
        { label: 'Parenting', href: '/category/parenting' },
    ]

    return (
        <footer className="mt-20 border-t border-surface-200 bg-surface-50">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="space-y-4">
                        <div className="text-2xl font-black tracking-tighter text-brand-500">
                            INSTABLOGS
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-surface-600">
                            Stay updated with the latest stories from around the world. Your daily dose of inspiration and information.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            <div>
                                <p className="font-bold uppercase tracking-widest text-surface-900">Categories</p>
                                <nav className="mt-6 flex flex-col space-y-4">
                                    {links.map((link) => (
                                        <Link 
                                            key={link.href}
                                            href={link.href}
                                            className="text-sm text-surface-600 transition hover:text-brand-500"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div>
                                <p className="font-bold uppercase tracking-widest text-surface-900">About</p>
                                <nav className="mt-6 flex flex-col space-y-4">
                                    <Link href="#" className="text-sm text-surface-600 transition hover:text-brand-500">Our Story</Link>
                                    <Link href="#" className="text-sm text-surface-600 transition hover:text-brand-500">Contact Us</Link>
                                    <Link href="#" className="text-sm text-surface-600 transition hover:text-brand-500">Privacy Policy</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-surface-200 pt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                    <p className="text-xs text-surface-500">
                        &copy; {currentYear} InstaBlogs. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {/* Social links placeholder */}
                        <div className="h-4 w-4 bg-surface-300 rounded-full"></div>
                        <div className="h-4 w-4 bg-surface-300 rounded-full"></div>
                        <div className="h-4 w-4 bg-surface-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer