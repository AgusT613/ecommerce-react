import ArrowLeft from "@/assets/arrow-left.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import styles from "@/components/homePage/slideBtn/slideBtn.module.css"

export default function SlideBtn() {

    const previousItem = () => {
        return
    }

    const nextItem = () => {
        return
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
