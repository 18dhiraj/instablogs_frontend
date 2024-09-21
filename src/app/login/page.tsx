

import Link from "next/link";
import Head from "next/head";
import React from "react";
import LoginForm from "@/components/loginForm";

export const metadata = {
    title: "Social - login"
}

const Login = () => {

    return (
        <div className="w-1/2 mx-auto mt-10">
            <Head>
                <title>Social - register</title>
                <meta name="description" content={"Custom description"} />
            </Head>
            <LoginForm />
            <div className="flex w-fit mx-auto">
                <div className="w-fit mr-[2px]">Don't have an account?</div>
                <Link href={"/register"} className="font-bold"> Register</Link>
            </div>
        </div>
    )
}

export default Login