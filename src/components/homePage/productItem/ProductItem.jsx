import styles from "@/components/homePage/productItem/productItem.module.css"
import Favorite from "@/assets/favorite.svg"
import Cart from "@/assets/cart.svg"
import StarRating from "./starRating/StarRating"

const defaultProduct = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
        rate: 3.9,
        count: 120
    }
}

export default function ProductItem({product = defaultProduct}) {
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
