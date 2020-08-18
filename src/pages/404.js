import React from "react"
import styles from "./404.module.css"

export default function Home() {
  return (
    <div>
      <h1 className={styles.header}>Hello from 404!</h1>
      <p className={styles.errorMessage}>The page you are looking for does not exist.</p>
    </div>
  )
}
