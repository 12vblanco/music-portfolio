import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © All Rights Reserved - Gill Adamson {new Date().getFullYear()}
        </p>
        <p className={styles.credit}>
          Website by{" "}
          <a
            href="https://victorblanco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Victor Blanco
          </a>
        </p>
      </div>
    </footer>
  );
};
