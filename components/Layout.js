import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="App">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Pokedex</title>
      </Head>
      <Header />
      <section className="AppBody">
        <main className="mainContainer animeLeft">{children}</main>
      </section>
      <Footer />
    </div>
  );
}
