import Link from "next/link";
import React from "react";
import Head from 'next/head'
import RegisterForm from "@/components/RegisterFrom";

export const metadata = {
    title: "Social - register"
}

const Register = () => {

    return (
        <div className="mt-10" >
            <Head>
                <title>Social - register</title>
                <meta name="description" content={"Custom description"} />
            </Head>
            <div className="w-1/2 mx-auto">
                <RegisterForm />
                <div className="flex w-fit mx-auto">
                    <div className="w-fit mr-[2px]">Already have an account?</div>
                    <Link href={"/login"} className="font-bold"> sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Register