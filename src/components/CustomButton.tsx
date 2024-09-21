"use client"
import React from "react";

interface ButtonInterface {
    title: string;
    onSubmit: (e: any) => void;
    loading: boolean;
}

const CustomButton = (props: ButtonInterface) => {

    const { title, onSubmit, loading } = props

    return (
        <button className={"px-4 py-2 rounded-md shadow-md text-[#fff] bg-indigo-500 hover:bg-indigo-600"} onClick={onSubmit}>{loading ? "Loading" : title}</button>
    )
}

export default CustomButton