'use client'

import React, { useState } from "react";
import InputField from '@/components/InputFields'
import CustomButton from "@/components/CustomButton";

interface FieldValuesInterface {
    email: string;
    password: string;
    name: string
}

const RegisterForm = () => {

    const [fieldValues, setFieldValues] = useState<FieldValuesInterface>({ email: "", password: "", name: '' })
    const [loading, setLoading] = useState(false)

    const setData = (k: keyof FieldValuesInterface, v: string) => {

        let _fieldValues: FieldValuesInterface = { ...fieldValues }
        _fieldValues[k] = v;

        if (v.trim() == '') {
            delete _fieldValues[k]
        }
        setFieldValues(_fieldValues)
    }

    const handleSignup = (e: any) => {
        setLoading(true)
        e.preventDefault()
        // alert(JSON.stringify(fieldValues))
        setLoading(false)
    }

    return (
        <>
            <div className="text-center my-[40px] text-xl font-bold">Register Form</div>
            <form onSubmit={handleSignup}>
                <InputField title='Name' value={fieldValues.name} onChange={setData} dataKey="name" type='text' />
                <InputField title='Email' value={fieldValues.email} onChange={setData} dataKey="email" type='text' />
                <InputField title='Password' value={fieldValues.password} onChange={setData} dataKey="password" type='password' />
                <div className="mx-auto w-fit my-2">
                    <CustomButton onSubmit={handleSignup} loading={loading} title="Sign up" />
                </div>
            </form >
        </>
    )
}

export default RegisterForm