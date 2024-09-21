"use client"
import React, { useState, useEffect } from "react";
import InputField from '@/components/InputFields'
import CustomButton from "./CustomButton";

interface FieldValuesInterface {
    email: string;
    password: string;
}


const LoginForm = () => {

    const [fieldValues, setFieldValues] = useState<FieldValuesInterface>({ email: "", password: "" })
    const [loading, setLoading] = useState(false)

    const setData = (k: keyof FieldValuesInterface, v: string) => {

        let _fieldValues: FieldValuesInterface = { ...fieldValues }
        _fieldValues[k] = v;

        if (v.trim() == '') {
            delete _fieldValues[k]
        }
        setFieldValues(_fieldValues)
    }

    const handleLogin = (e: any) => {
        setLoading(true)
        e.preventDefault()
        alert(JSON.stringify(fieldValues))
        setLoading(false)
    }

    return (
        <>
            <div className="text-center my-[40px] text-xl font-bold">Login Form</div>
            <form onSubmit={handleLogin}>
                <InputField title='Email' value={fieldValues.email} onChange={setData} dataKey="email" type='text' />
                <InputField title='Password' value={fieldValues.password} onChange={setData} dataKey="password" type='text' />
                <div className="mx-auto w-fit my-2">
                    <CustomButton onSubmit={handleLogin} loading={loading} title="Sign in" />
                </div>
            </form >
        </>
    )
}

export default LoginForm