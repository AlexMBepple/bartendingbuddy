'use client'
import styles from './page.module.css'
import Menu from './menu/Menu'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>BARTENDER BUDDY</h1>
      <Menu></Menu>
    </main>
  )
}
