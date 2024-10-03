import CustomerServiceIcon from "@/assets/customer-service.svg"
import DeliveryIcon from "@/assets/delivery.svg"
import SecureIcon from "@/assets/secure.svg"
import styles from "@/components/homePage/shopServices/shopServices.module.css"

export default function ShopServices() {
    return (
    <div className={styles.servicesContainer}>
        <article className={styles.service}>
            <div className={styles.icon}>
                <DeliveryIcon />
            </div>
            <span className={styles.label}>FREE AND FAST DELIVERY</span>
            <p className={styles.text}>Free delivery for all orders over $140</p>
        </article>
        <article className={styles.service}>
            <div className={styles.icon}>
                <CustomerServiceIcon />
            </div>
            <span className={styles.label}>24/7 CUSTOMER SERVICE</span>
            <p className={styles.text}>Friendly 24/7 customer support</p>
        </article>
        <article className={styles.service}>
            <div className={styles.icon}>
                <SecureIcon />
            </div>
            <span className={styles.label}>MONEY BACK GUARANTEE</span>
            <p className={styles.text}>We return money within 30 days</p>
        </article>
    </div>
    )
};
