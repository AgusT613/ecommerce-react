import styles from "@/components/homePage/productItem/starRating/starRating.module.css"

export default function StarRating({ numberRate }) {
    const intStarRating = Math.floor(numberRate)
    const floatStarRating = numberRate - intStarRating
    const stars = [1,2,3,4,5]

    return (
        <div className={styles.starsContainer}>
            {stars.map(star => (
                <span key={star} className={styles.starWrapper}>
                    {
                    (star - 1  === intStarRating) ?
                    <div className={styles.star} style={{display: "block", width: `${floatStarRating}rem`}}></div> : (
                        (star <= intStarRating) ?
                        <div className={styles.star} style={{display: "block"}}></div> :
                        <div className={styles.star}></div>
                    )
                    }
                </span>
            ))}
        </div>
    )
}