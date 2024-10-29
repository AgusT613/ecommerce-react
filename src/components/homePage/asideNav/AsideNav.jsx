import styles from "@/components/homePage/asideNav/asideNav.module.css"
import shopCategories from "@/utils/shopCategories"
import { useTranslation } from "react-i18next"

export default function AsideNav() {
    const { t } = useTranslation()

    return (
        <nav className={styles.asideNav}>
            <div className={styles.contentWrapper}>
                {shopCategories.map(category => (
                    <a href="#" key={category.section} className={styles.link}>
                        { t("homePage.hero.asideNav." + category.section.toCamelCase()) }
                    </a>
                ))}
            </div>
        </nav>
    )
};
