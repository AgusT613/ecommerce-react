import styles from "@/components/homePage/footer/footerSection/footerSection.module.css"

export default function FooterSection({children, title}) {
    return(
        <section className={styles.footerSection}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </section>
    )
};
