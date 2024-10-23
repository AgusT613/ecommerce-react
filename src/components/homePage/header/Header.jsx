import styles from "@/components/homePage/header/header.module.css"
import FavoriteIcon from "@/assets/favorite.svg"
import CartIcon from "@/assets/cart.svg"
import SearchItems from "./searchItems/SearchItems"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <h1>ECommy</h1>
                <nav className={styles.headerNav}>
                    <a href="#" className={styles.link}>Home</a>
                    <a href="#" className={styles.link}>Contact</a>
                    <a href="#" className={styles.link}>About</a>
                    <a href="#" className={styles.link}>Sign Up</a>
                </nav>
                <div className={styles.headerActions}>
                    <SearchItems />
                    <span className={styles.favorite}>
                        <FavoriteIcon />
                    </span>
                    <span className={styles.cart}>
                        <CartIcon />
                    </span>
                </div>
            </div>
        </header>
    )
};
