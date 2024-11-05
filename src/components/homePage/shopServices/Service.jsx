import styles from "@/components/homePage/shopServices/shopServices.module.css"

export default function Service({ children, title, subtitle }) {
    return (
        <article className={styles.service}>
            <div className={styles.icon}>{children}</div>
            <span className={styles.label}>{title}</span>
            <p className={styles.text}>{subtitle}</p>
        </article>
    )
}

