import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.scss"

export default function Home() {
  return (
    <div className={styles.content}>
    <Link to="/">Home</Link> | <Link to="/about">About Me</Link> 
      <h1>Hello from About!</h1>
    </div>
  )
}
