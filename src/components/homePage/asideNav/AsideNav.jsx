import styles from "@/components/homePage/asideNav/asideNav.module.css"
import shopCategories from "@/utils/shopCategories"

export default function AsideNav() {
    return (
        <nav className={styles.asideNav}>
            <div className={styles.contentWrapper}>
                {shopCategories.map(category => (
                    <a href="#" key={category.section} className={styles.link}>
                        {category.section}
                    </a>
                ))}
            </div>
        </nav>
    )
};
