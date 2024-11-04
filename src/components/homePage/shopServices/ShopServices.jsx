import CustomerServiceIcon from "@/assets/customer-service.svg"
import DeliveryIcon from "@/assets/delivery.svg"
import SecureIcon from "@/assets/secure.svg"
import styles from "@/components/homePage/shopServices/shopServices.module.css"
import { useTranslation } from "react-i18next"

export default function ShopServices() {
    const { t } = useTranslation()

    return (
    <div className={styles.servicesContainer}>
        <article className={styles.service}>
            <div className={styles.icon}>
                <DeliveryIcon />
            </div>
            <span className={styles.label}>
                {t("homePage.main.shopServices.delivery.title")}
            </span>
            <p className={styles.text}>
                {t("homePage.main.shopServices.delivery.subtitle")}
            </p>
        </article>
        <article className={styles.service}>
            <div className={styles.icon}>
                <CustomerServiceIcon />
            </div>
            <span className={styles.label}>
                {t("homePage.main.shopServices.service.title")}
            </span>
            <p className={styles.text}>
                {t("homePage.main.shopServices.service.subtitle")}
            </p>
        </article>
        <article className={styles.service}>
            <div className={styles.icon}>
                <SecureIcon />
            </div>
            <span className={styles.label}>
                {t("homePage.main.shopServices.money.title")}
            </span>
            <p className={styles.text}>
                {t("homePage.main.shopServices.money.subtitle")}
            </p>
        </article>
    </div>
    )
};
