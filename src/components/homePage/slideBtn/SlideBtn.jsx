import ArrowLeft from "@/assets/arrow-left.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import styles from "@/components/homePage/slideBtn/slideBtn.module.css"
import { ProductSectionPageContext } from "@/context/productSectionPage/ProductSectionPageProvider"
import { useContext } from "react"

export default function SlideBtn({ sectionName }) {
    const { pages, dispatch } = useContext(ProductSectionPageContext)
    const currentPage = pages[sectionName].page

    const previousItem = () => {
        dispatch({ type: "PREVIOUS_PAGE", sectionName })
    }

    const nextItem = () => {
        dispatch({ type: "NEXT_PAGE", sectionName })
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
