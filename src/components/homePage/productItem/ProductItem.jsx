import styles from "@/components/homePage/productItem/productItem.module.css"
import Favorite from "@/assets/favorite.svg"
import Cart from "@/assets/cart.svg"
import StarRating from "./starRating/StarRating"

const skeletonProduct = {
    id: 1,
    title: "PRODUCT_TITLE",
    price: 100,
    description: "PRODUCT_DESCRIPTION",
    category: "PRODUCT_CATEGORY",
    image: "PRODUCT_IMG",
    rating: {
        rate: 5,
        count: 200
    }
}

export default function ProductItem({ product = skeletonProduct }) {
    const { id, title, price, description, category, image, rating } = product
    const { rate, count } = rating
    const link = "http://productItemPage"

    const handleAddToFavorite = id => {
        alert(`Added item with id ${id} to favorites`)
    }

    const handleAddToCart = id => {
        alert(`Added item with id ${id} to cart`)
    }

    const handleProductLink = link => {
        alert(`Redirecting to ${link}`)
    }

    return (
        <div className={styles.productItemContainer}>
            <div className={styles.category}>{category}</div>
            <div className={styles.imgContainer}>
                <img src={image} alt={description} className={styles.img} />
                <div className={styles.btnContainer}>
                    <span className={styles.favorite} onClick={() => handleAddToFavorite(id)}>
                        <Favorite />
                    </span>
                    <span className={styles.cart} onClick={() => handleAddToCart(id)}>
                        <Cart />
                    </span>
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <h4 className={styles.productName} onClick={() => handleProductLink(link)}>{title}</h4>
                <div className={styles.productPricing}>
                    <span className={styles.price}>${price}</span>
                    <StarRating numberRate={rate} />
                    <span className={styles.numberReviews}>({count})</span>
                </div>
            </div>
        </div>
    )
};
