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
      <main id={"top"}>
        <div className={"logo"}>
          <div className={"logo__container"}>
            <div className={"logo__item"}>
              <a href={"/"}>
                <img src={"/apple-touch-icon.png"} alt={"Die fehlende 20 Minuten Suchfunktion"}/>
              </a>
            </div>
            <div className={"logo__item"}>
              <a href={"/"}>
                <h1>Die fehlende 20 Minuten Suchfunktion</h1>
              </a>
            </div>
          </div>
        </div>
        <Search/>
      </main>
      <Footer/>
    </div>
  )
}
