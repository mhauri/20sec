import Head from 'next/head'
import Footer from '../components/footer'
import Search from "../components/search";

export default function Home() {
  return (
    <div className={"app"}>
      <Head>
        <title>20Sec - Die fehlende 20Minuten Suchfunktion</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="robots" content="noindex,nofollow"/>
      </Head>
      <main>
        <Search/>
      </main>
      <Footer/>
    </div>
  )
}
