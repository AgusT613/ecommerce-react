import ArrowLeft from "@/assets/arrow-left.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import styles from "@/components/homePage/slideBtn/slideBtn.module.css"
import { ProductSectionPageContext } from "@/context/ProductSectionPageProvider"
import { useContext } from "react"

export default function SlideBtn({ sectionName }) {
    const { sectionPage, setSectionPage } = useContext(ProductSectionPageContext)

    const previousItem = () => {
        const nextPage = {
            ...sectionPage, [sectionName]: {
                ...sectionPage[sectionName], page: sectionPage[sectionName].page - 1
            }
        }

        if (nextPage[sectionName].page === -1) {
            console.log(sectionPage[sectionName].maxPages);
            
            setSectionPage({
                ...sectionPage, [sectionName]: {
                    ...sectionPage[sectionName], page: sectionPage[sectionName].maxPages - 1
                }
            })
        } else {
            setSectionPage(nextPage)
        }
    }

    const nextItem = () => {
        const nextPage = {
            ...sectionPage, [sectionName]: {
                ...sectionPage[sectionName], page: sectionPage[sectionName].page + 1
            }
        }

        if (nextPage[sectionName].maxPages === nextPage[sectionName].page) {
            setSectionPage({
                ...sectionPage, [sectionName]: {
                    ...sectionPage[sectionName], page: 0
                }
            })
        } else {
            setSectionPage(nextPage)
        }
    }

    return (
        <div className={styles.slideBtnContainer}>
            <span className={styles.arrow} onClick={previousItem}>
                <ArrowLeft />
            </span>
            <span className={styles.arrow} onClick={nextItem}>
                <ArrowRight />
            </span>
        </div>
    )
};
