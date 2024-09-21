import React from "react";

interface InpurProps {
    title: string
    value: string
    onChange: (k: any, v: string) => void
    dataKey: string,
    type: string
}

const InputFields = (props: InpurProps) => {

    const { title = 'undefined', value, onChange, dataKey, type = 'text' } = props
    return (
        <div className="border rounded mb-5 mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '5px 20px' }}>
            <label className="font-medium">{title}</label>
            <input className="p-2 focus:border-0 outline-0 w-full bg-[transparent]" type={type} value={value} onChange={(e) => onChange(dataKey, e.target.value)} />
        </div>
    )
}

export default InputFields