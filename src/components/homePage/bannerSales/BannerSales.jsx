import ArrowDown from "@/assets/chevron-down.svg"
import styles from "@/components/homePage/bannerSales/bannerSales.module.css"
import { useState } from "react"

function ToggleLanguage() {
    const [lang, setLang] = useState("English")

    return (
        <div className={styles.toggleLangContainer}>
            <span>{lang}</span>
            <ArrowDown className={styles.arrowDownIcon} />
        </div>
    )
}

export default function BannerSales() {
    return(
        <section className={styles.bannerSalesContainer}>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <span className={styles.shopNowLink}>ShopNow</span>
            <ToggleLanguage />
        </section>
    )
};
