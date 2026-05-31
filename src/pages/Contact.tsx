import { useState } from "react";
import { FaInstagram, FaSpotify, FaSoundcloud, FaYoutube } from "react-icons/fa";
import styles from "./Contact.module.css";
import gradientBanner from "../assets/Gradient.png";

const socialLinks = [
  { icon: FaInstagram, label: "INSTA", href: "#" },
  { icon: FaSpotify, label: "SPOTIFY", href: "#" },
  { icon: FaSoundcloud, label: "SOUNDCLOUD", href: "#" },
  { icon: FaYoutube, label: "YOUTUBE", href: "#" },
];

const Contact = () => {
  const [btnLabel, setBtnLabel] = useState("SEND SIGNAL");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Send a Signal</h1>
          <p className={styles.subtitle}>Let's create something beautiful together.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardGlow} />
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.twoCol}>
                <div className={styles.field}>
                  <label className={styles.label}>NAME</label>
                  <input className={styles.input} type="text" placeholder="Your Name" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>EMAIL</label>
                  <input className={styles.input} type="email" placeholder="hello@art.com" />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>INQUIRY TYPE</label>
                <select className={styles.select}>
                  <option>Live Set</option>
                  <option>Remix</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>MESSAGE</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  rows={5}
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

          <div className={`${styles.card} ${styles.sidebarCard}`}>
            <div>
              <h3 className={styles.sidebarTitle}>The Hub</h3>
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

        <img src={gradientBanner} alt="" className={styles.banner} />
      </div>
    </main>
  );
};

export default Contact;
