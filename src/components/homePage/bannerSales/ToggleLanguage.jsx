import ArrowDown from "@/assets/chevron-down.svg"
import styles from "@/components/homePage/bannerSales/bannerSales.module.css"
import { useTranslation } from "react-i18next"

export default function ToggleLanguage() {
    const { t, i18n } = useTranslation()

    return (
        <label className={styles.toggleLangContainer} htmlFor="toggleLangBtn">
            <span>
                {i18n.language === "en" ? 
                    t("homePage.bannerSales.toggleLang.english") :
                    t("homePage.bannerSales.toggleLang.spanish")
                }
            </span>
            <ArrowDown className={styles.arrowDownIcon} />
            <input type="checkbox" id="toggleLangBtn" className={styles.toggleLangCheckbox} />
            <div className={styles.languages}>
                <span onClick={()=> i18n.changeLanguage("en")} className={styles.lang}>
                    {t("homePage.bannerSales.toggleLang.english")}
                </span>
                <span onClick={()=> i18n.changeLanguage("es")} className={styles.lang}>
                    {t("homePage.bannerSales.toggleLang.spanish")}
                </span>
            </div>
        </label>
    )
}
