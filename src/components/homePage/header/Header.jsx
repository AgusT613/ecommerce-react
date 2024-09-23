import styles from "@/components/homePage/header/header.module.css"
import SearchIcon from "@/assets/search.svg"
import FavoriteIcon from "@/assets/favorite.svg"
import CartIcon from "@/assets/cart.svg"

export default function Header() {
    const searchItem = (e) => {
        e.preventDefault()
    }

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
                    <form onSubmit={searchItem} className={styles.searchForm}>
                        <input type="text" placeholder="What are you looking for?"/>
                        <button>
                            <SearchIcon />
                        </button>
                    </form>
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
