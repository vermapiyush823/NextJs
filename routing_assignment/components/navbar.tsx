import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>ECommerce</h1>
        <ul className={styles.ul}>
          <li>
            <Link href="/" className={styles.links}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.links}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/cart" className={styles.links}>
              Cart
            </Link>
          </li>
          <li>
            <Link href="/login" className={styles.links}>
              Login
            </Link>
          </li>
          <li>
            <form>
              <input type="text" placeholder="Search" />
              <Link href="/search" as="/search?q=1">
                Search
              </Link>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
