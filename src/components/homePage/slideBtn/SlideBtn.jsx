import ArrowLeft from "@/assets/arrow-left.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import styles from "@/components/homePage/slideBtn/slideBtn.module.css"
import { ProductSectionPageContext } from "@/context/ProductSectionPageProvider"
import { useContext } from "react"

export default function SlideBtn({ sectionName }) {
    const { sectionPage, setSectionPage } = useContext(ProductSectionPageContext)
    const currentPage = sectionPage[sectionName].page

    const previousItem = () => {
        const previousPage = {
            ...sectionPage, [sectionName]: {
                ...sectionPage[sectionName], page: currentPage - 1
            }
        }

        if (previousPage[sectionName].page < 0) {
            setSectionPage({
                ...sectionPage, [sectionName]: {
                    ...sectionPage[sectionName], page: sectionPage[sectionName].maxPages - 1
                }
            })
        } else {
            setSectionPage(previousPage)
        }
    }

    const nextItem = () => {
        const nextPage = {
            ...sectionPage, [sectionName]: {
                ...sectionPage[sectionName], page: currentPage + 1
            }
        }

        if (nextPage[sectionName].page === sectionPage[sectionName].maxPages) {
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
            <span className={styles.pageNumber}>
                {currentPage + 1}
            </span>
            <span className={styles.arrow} onClick={previousItem}>
                <ArrowLeft />
            </span>
            <span className={styles.arrow} onClick={nextItem}>
                <ArrowRight />
            </span>
        </div>
    )
};
