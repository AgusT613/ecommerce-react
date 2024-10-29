import styles from "@/components/homePage/productsLayout/viewAllProductsLink/viewAllProductsLink.module.css"
import { useTranslation } from "react-i18next"

export default function ViewAllProductsLink({ children = "View All" }) {
    const { t } = useTranslation()

    return (
        <div className={styles.viewAllItemContainer}>
            <a href="#" className={styles.viewAllBtn}>
                {
                    children.toCamelCase() === "viewAll" 
                        ? t("components.viewAllProductsLinks.viewAll")
                        : t("components.viewAllProductsLinks.viewAllProducts")
                }
            </a>
        </div>
    )
};
