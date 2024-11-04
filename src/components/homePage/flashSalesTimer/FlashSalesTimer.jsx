import styles from "@/components/homePage/flashSalesTimer/flashSalesTimer.module.css"
import useTimer from "@/hooks/useTimer"
import { useTranslation } from "react-i18next"

export default function FlashSalesTimer({ days = 3 }) {
    const { t } = useTranslation()
    const { day, hour, minute, second } = useTimer(days)

    return (
        <div className={styles.flashSalesTimerContainer}>
            <div className={styles.timeContainer}>
                <span className={styles.label}>
                    {t("components.flashSalesTimer.day")}
                </span>
                <span className={styles.time}>{day}</span>
            </div>

            <div className={styles.timeContainer}>
                <span className={styles.label}>
                    {t("components.flashSalesTimer.hour")}
                </span>
                <span className={styles.time}>{hour}</span>
            </div>

            <div className={styles.timeContainer}>
                <span className={styles.label}>
                    {t("components.flashSalesTimer.minute")}
                </span>
                <span className={styles.time}>{minute}</span>
            </div>

            <div className={styles.timeContainer}>
                <span className={styles.label}>
                    {t("components.flashSalesTimer.second")}
                </span>
                <span className={styles.time}>{second}</span>
            </div>
        </div>
    )
};
