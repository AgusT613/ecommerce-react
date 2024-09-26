import styles from "@/components/homePage/productsLayout/viewAllProductsLink/viewAllProductsLink.module.css"

export default function ViewAllProductsLink({ children }) {
    return (
        <div className={styles.viewAllItemContainer}>
            <a href="#" className={styles.viewAllBtn}>{children}</a>
        </div>
    )
};
