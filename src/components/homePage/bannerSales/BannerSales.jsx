import ArrowDown from "@/assets/chevron-down.svg"
import styles from "@/components/homePage/bannerSales/bannerSales.module.css"
import { useState } from "react"

function ToggleLanguage() {
    const [lang, setLang] = useState("English")

    return (
        <label className={styles.toggleLangContainer} htmlFor="toggleLangBtn">
            <span>{lang}</span>
            <ArrowDown className={styles.arrowDownIcon} />
            <input type="checkbox" id="toggleLangBtn" className={styles.toggleLangCheckbox} />
            <div className={styles.languages}>
                <span onClick={()=> setLang("English")} className={styles.lang}>English</span>
                <span onClick={()=> setLang("Spanish")} className={styles.lang}>Spanish</span>
            </div>
        </label>
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
