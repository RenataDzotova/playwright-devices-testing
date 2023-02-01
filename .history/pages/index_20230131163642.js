import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.container}>
      <nav>
        <Link href="/about"> <h1>About Page</h1> </Link>
      </nav>
    </main>
  )
}
