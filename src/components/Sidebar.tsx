'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";

const Sidebar = (props: any) => {

    const { setLogged } = props

    const [active, setActive] = useState<string>('home')
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        let paths = pathname.split("/")
        if (paths[paths.length - 1] == "") {
            router.push(pathname.slice(0, pathname.length - 1))
        } else {
            setActive(pathname);
        }
    }, [pathname])

    return (
        <nav className="w-fit sm:w-2/5 md:w-1/3 lg:w-[300px] border-r py-[20px] sm:py-10 px-2 sm:px-10 flex flex-col justify-between" >
            <div>
                <div onClick={() => { router.push("/home") }} className={` ${active.includes('home') ? " bg-indigo-500 text-white shadow" : ""}  py-2 pl-3 pr-0 sm:pr-3 my-3 hover:bg-indigo-500 rounded-md border hover:text-white flex cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-0 sm:mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <div className='hidden sm:block' >
                        Home
                    </div>
                </div>
                <div onClick={() => { router.push("/settings") }} className={` ${active.includes('settings') ? " bg-indigo-500 text-white shadow" : ""}  py-2 pl-3 pr-0 sm:pr-3 my-3 hover:bg-indigo-500 rounded-md border hover:text-white flex cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                    <div className='hidden sm:block'>
                        Settings
                    </div>
                </div>
                <div onClick={() => { router.push("/alerts") }} className={`${active.includes('alerts') ? "bg-indigo-500 text-white shadow" : ""}  py-2 pl-3 pr-0 sm:pr-3 my-3 hover:bg-indigo-500 rounded-md border hover:text-white flex cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <div className='hidden sm:block'>
                        Alerts
                    </div>
                </div>
            </div>
            <div onClick={() => setLogged(false)} className={` py-2 pl-3 pr-0 sm:pr-3 my-3 rounded-md flex cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                <div className='hidden sm:block'>
                    Logout
                </div>
            </div>
        </nav>
    )
}

export default Sidebar