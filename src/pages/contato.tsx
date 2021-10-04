import * as React from "react";
import * as styles from "./contato_style.scss";
import { Helmet } from "react-helmet";

const ContatoPage = () => {
  return (
    <>
      <Helmet>
        <title>SAEC 2021 | Em contrução</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
        />
      </Helmet>
      <header>
        <img className={styles.logo} alt="Logo SAEC" src="/logo.svg" />
        <h3>Como você prefere falar com a gente?</h3>
      </header>
      <main className={styles.main}>
        <div className={styles.socialMedia}>
          <div className={styles.card}>
            <h3>E-mail</h3>
            <p>Tem alguma dúvida? Podemos te ajudar pelo nosso canal de email.</p>
          </div>
          <div className={styles.card}>
            <h3>Facebook</h3>
            <p>Tem alguma dúvida? Podemos te ajudar pelo nosso canal de email.</p>
          </div>
          <div className={styles.card}>
            <h3>Instagram</h3>
            <p>Tem alguma dúvida? Podemos te ajudar pelo nosso canal de email.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContatoPage;