import styles from "@/components/homePage/shopSectionLayout/shopSectionLayout.module.css"
import { useTranslation } from "react-i18next"

function SectionHeader({ children, title }) {
    const { t } = useTranslation()

    return (
        <div className={styles.sectionHeaderContainer}>
            <h3 className={styles.sectionName}>
                {t(`homePage.main.${title.toCamelCase()}.subtitle`)}
            </h3>
            <div className={styles.sectionHeaderSlotContainer}>
                {children}
            </div>
        </div>
    )
}

export default function ShopSectionLayout({ children, title, sectionHeaderSlot }) {
    const { t } = useTranslation()

    return(
        <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>
                {t(`homePage.main.${title.toCamelCase()}.section`)}
            </h2>
            <SectionHeader title={title}>
                {sectionHeaderSlot}
            </SectionHeader>
            {children}
        </section>
    )
};
