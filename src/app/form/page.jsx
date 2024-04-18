"use client"
import { useState } from "react"

export default function FormTest() {
    const [value, setValue] = useState('Inicial')

    return(
        <div style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
        }}>
            <span>{value}</span>
            <input type="text" value={value}
                onChange={e => setValue(e.target.value)} />
        </div>
    )
}