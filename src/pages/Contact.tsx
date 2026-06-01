import { useState, type SyntheticEvent } from "react";
import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const socialLinks = [
  { icon: FaInstagram, label: "INSTA", href: "#" },
  { icon: FaSpotify, label: "SPOTIFY", href: "#" },
  { icon: FaSoundcloud, label: "SOUNDCLOUD", href: "#" },
  { icon: FaYoutube, label: "YOUTUBE", href: "#" },
];

const Contact = () => {
  const [btnLabel, setBtnLabel] = useState("SEND SIGNAL");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnLabel("SIGNAL SENT ✨");
    setSent(true);
    setTimeout(() => {
      setBtnLabel("SEND SIGNAL");
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <main className={styles.page}>
      <div className={styles.blobPurple} />
      <div className={styles.blobTeal} />
      <div className={styles.formGlow} />

      <div className={styles.container}>
        <div className={styles.formColumn}>
          <div className={styles.card}>
            <div className={styles.cardGlow} />
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.twoCol}>
                <div className={styles.field}>
                  <label className={styles.label}>NAME*</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>EMAIL*</label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="hello@art.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>INQUIRY TYPE</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="e.g. Live Set, Remix, Collaboration..."
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>MESSAGE*</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitBtn} ${sent ? styles.submitBtnSent : ""}`}
              >
                {btnLabel}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.infoColumn}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Send a Signal</h1>
            <p className={styles.subtitle}>
              Let's create something beautiful together.
            </p>
          </div>

          <div className={styles.socialSection}>
            {/* <h3 className={styles.sectionLabel}>The Hub</h3> */}
            <div className={styles.socialGrid}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} className={styles.socialLink} href={href}>
                  <Icon className={styles.socialIcon} />
                  <span className={styles.socialLabel}>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.studioStatus}>
            <div className={styles.pulse}>
              <span className={styles.pulseRing} />
              <span className={styles.pulseDot} />
            </div>
            <div className={styles.statusText}>
              <span className={styles.statusLabel}>Studio Status</span>
              <span className={styles.statusSub}>Creating...</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
