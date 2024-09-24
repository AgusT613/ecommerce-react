import styles from "@/components/homePage/shopSectionLayout/shopSectionLayout.module.css"

function SectionHeader({ children, sectionName }) {
    return (
        <div className={styles.sectionHeaderContainer}>
            <h3 className={styles.sectionName}>{sectionName}</h3>
            <div className={styles.sectionHeaderSlotContainer}>
                {children}
            </div>
        </div>
    )
}

export default function ShopSectionLayout({ children, title, subtitle, sectionHeaderSlot }) {
    return(
        <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <SectionHeader sectionName={subtitle}>
                {sectionHeaderSlot}
            </SectionHeader>
            {children}
        </section>
    )
};
