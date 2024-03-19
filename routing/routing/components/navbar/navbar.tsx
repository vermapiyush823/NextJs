import Link from "next/link";
import styles from "./navbar.module.css";
const navbar = () => {
  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
        <h1 className="border-b-2 border-black ">Logo</h1>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
