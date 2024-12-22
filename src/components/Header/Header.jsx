import GuthubIcon from "../../icons/GithubIcon";
import LocationIcon from "../../icons/LocationIcon";
import MailIcon from "../../icons/MailIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.name}>
          <h1 className={styles.h1}>Maxim Dylevskiy</h1>
          <p className={styles.title}>Frontend developer</p>
        </div>
        <ul className={styles.ul}>
          <li className={styles.link}>
            <a href="https://github.com/dylikmax" target="_blank" className={styles.li}>
              <GuthubIcon className={styles.icon} />
              dylikmax
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://t.me/bebranator3000" target="_blank" className={styles.li}>
              <TelegramIcon className={styles.icon} />
              @bebranator3000
            </a>
          </li>
          <li className={styles.link}>
            <a href="mailto:dylikmax899@gmail.com" target="_blank" className={styles.li}>
              <MailIcon className={styles.icon} />
              dylikmax899@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <LocationIcon className={styles.icon} />
            Minsk, Belarus
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
