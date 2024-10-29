import styles from "@/components/homePage/bannerSales/bannerSales.module.css"
import { useTranslation } from "react-i18next"
import ToggleLanguage from "./ToggleLanguage"

export default function BannerSales() {
    const { t } = useTranslation()

    return(
        <section className={styles.bannerSalesContainer}>
            <p>{t("homePage.bannerSales.bannerText")}</p>
            <span className={styles.shopNowLink}>{t("homePage.bannerSales.shopNow")}</span>
            <ToggleLanguage />
        </section>
    )
};
