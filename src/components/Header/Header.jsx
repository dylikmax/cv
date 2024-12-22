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
          <li className={styles.li}>
            <GuthubIcon className={styles.icon}/>
            dylikmax
          </li>
          <li className={styles.li}>
            <TelegramIcon className={styles.icon}/>
            @bebranator3000
          </li>
          <li className={styles.li}>
            <MailIcon className={styles.icon} />
            dylikmax899@gmail.com
          </li>
          <li className={styles.li}>
            <LocationIcon className={styles.icon} />
            Minsk, Belarus
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
