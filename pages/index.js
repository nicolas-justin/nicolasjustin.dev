import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Nícolas Justin</title>
      </Head>

      <main className={styles.main}>
        <h1>Em construção</h1>
        <img src="/builting.svg" alt="Builting" />
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nicolas-justin"
        >
          Desenvolvido por Nícolas Justin
        </a>
        <img src="/logo.svg" alt="Logo" />
      </footer>
    </div>
  );
}
