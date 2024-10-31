import styles from "@/components/homePage/header/header.module.css"
import FavoriteIcon from "@/assets/favorite.svg"
import CartIcon from "@/assets/cart.svg"
import SearchItems from "./searchItems/SearchItems"
import { useTranslation } from "react-i18next"

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <h1>ECommy</h1>
                <nav className={styles.headerNav}>
                    <a href="#" className={styles.link}>
                        {t("homePage.header.nav.home")}
                    </a>
                    <a href="#" className={styles.link}>
                        {t("homePage.header.nav.contact")}
                    </a>
                    <a href="#" className={styles.link}>
                        {t("homePage.header.nav.about")}
                    </a>
                    <a href="#" className={styles.link}>
                        {t("homePage.header.nav.signUp")}
                    </a>
                </nav>
                <div className={styles.headerActions}>
                    <SearchItems />
                    <div className={styles.headerActionsIcons}>
                        <span className={styles.favorite}>
                            <FavoriteIcon />
                        </span>
                        <span className={styles.cart}>
                            <CartIcon />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
};
