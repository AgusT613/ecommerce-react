import styles from "@/components/homePage/shopSectionLayout/shopSectionLayout.module.css"

const defaultTime = {day: "03", hour: "23", minute: "19", second: "56"}

export default function FlashSalesTimer({time = defaultTime}) {
    const { day, hour, minute, second } = time

    return (
        <div className={styles.flashSalesTimerContainer}>
            <div className={styles.timeContainer}>
                <span className={styles.label}>Days</span>
                <span className={styles.time}>{day}</span>
            </div>

            <div className={styles.timeContainer}>
                <span className={styles.label}>Hours</span>
                <span className={styles.time}>{hour}</span>
            </div>

            <div className={styles.timeContainer}>
                <span className={styles.label}>Minutes</span>
                <span className={styles.time}>{minute}</span>
            </div>

            <div className={styles.timeContainer}>
                <span className={styles.label}>Seconds</span>
                <span className={styles.time}>{second}</span>
            </div>
        </div>
    )
};
