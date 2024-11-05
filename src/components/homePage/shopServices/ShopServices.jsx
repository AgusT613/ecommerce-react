import CustomerServiceIcon from "@/assets/customer-service.svg"
import DeliveryIcon from "@/assets/delivery.svg"
import SecureIcon from "@/assets/secure.svg"
import styles from "@/components/homePage/shopServices/shopServices.module.css"
import { useTranslation } from "react-i18next"
import Service from "./Service"

export default function ShopServices() {
    const { t } = useTranslation()

    return (
    <div className={styles.servicesContainer}>
        <Service 
            title={t("homePage.main.shopServices.delivery.title")}
            subtitle={t("homePage.main.shopServices.delivery.subtitle")}>
            <DeliveryIcon />
        </Service>
        <Service
            title={t("homePage.main.shopServices.service.title")}
            subtitle={t("homePage.main.shopServices.service.subtitle")}>
            <CustomerServiceIcon />
        </Service>
        <Service
            title={t("homePage.main.shopServices.money.title")}
            subtitle={t("homePage.main.shopServices.money.subtitle")}>
            <SecureIcon />
        </Service>
    </div>
    )
};
