'use client'

import { useEffect } from "react"

export default function ClientComponent() {
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            console.log('<<=== 🚀 fetchData ===>>',posts);
        }
        fetchData();
    }, [])
  return (
    <div className="border border-red-600">
        <h1>ClientComponent</h1>
    </div>
  )
}
