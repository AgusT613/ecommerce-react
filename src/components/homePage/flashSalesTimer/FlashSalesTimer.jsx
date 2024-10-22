import styles from "@/components/homePage/shopSectionLayout/shopSectionLayout.module.css"
import { useEffect, useState } from "react"

export default function FlashSalesTimer({ days = 3 }) {
    const [day, setDay] = useState(days)
    const [hour, setHour] = useState(23)
    const [minute, setMinute] = useState(59)
    const [second, setSeconds] = useState(60)

    useEffect(()=> {
        const intervalId = setInterval(() => {
            if (second === 0) {
                setMinute(minute - 1)
                setSeconds(60)
            } else setSeconds(second - 1)
            
            if (second === 0 && minute === 0) {
                setHour(hour - 1)
                setMinute(59)
                setSeconds(60)
            }
            
            if (second === 0 && minute === 0 && hour === 0) {
                setDay(day - 1)
                setHour(23)
                setMinute(59)
                setSeconds(60)
        }
        }, 1000);

        if (day === 0 && second === 0) clearInterval(intervalId)

        return ()=> {
            clearInterval(intervalId)
        }
    }, [second])

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
