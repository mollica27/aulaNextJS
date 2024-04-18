// import { useState } from "react"
"use client"

export default function contador() {
    //  const [ cont, setCont ] = useState(0)

     function mudaScore(e) {
        console.log(e)
     }

    return(
       <button onClick={e => mudaScore(e.type)}>teste</button>
    )
}
