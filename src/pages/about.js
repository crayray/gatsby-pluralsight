import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
    <Link to="/">Home</Link> | <Link to="/about">About Me</Link> 
      <h1>Hello from About!</h1>
    </div>
  )
}
