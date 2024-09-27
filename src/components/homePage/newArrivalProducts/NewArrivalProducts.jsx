import productItem2 from "/product-item-2.png"
import productItem3 from "/product-item-3.png"
import productItem4 from "/product-item-4.png"
import productItem5 from "/product-item-5.png"
import styles from "@/components/homePage/newArrivalProducts/newArrivalProducts.module.css"

export default function NewArrivalProducts() {
    return (
        <div className={styles.newProductArrivalsContainer}>
            <figure className={styles.imgContainer}>
              <img src={productItem2} alt="playstation 5" />
            </figure>
            <figure className={styles.imgContainer}>
              <img src={productItem3} alt="women's collections" />
            </figure>
            <figure className={styles.imgContainer}>
              <img src={productItem4} alt="speakers" />
            </figure>
            <figure className={styles.imgContainer}>
              <img src={productItem5} alt="perfume" />
            </figure>
        </div>
    )
};
