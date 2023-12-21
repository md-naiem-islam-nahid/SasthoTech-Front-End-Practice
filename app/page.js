import Image from 'next/image'
import styles from './page.module.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'


export default function Home() {
  return (
    <main className={styles.main}>

      <h1>
        Implementing Redux with Next.Js
      </h1>
      <div className={styles.description}>

        <Page1 />
        <Page2 />
        <Page3 />
      </div>

    </main>
  )
}
