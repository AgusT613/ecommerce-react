import styles from "@/components/homePage/header/searchItems/searchItems.module.css"

export default function FilteredProducts({ products }) {
    return (
        <div className={styles.filteredProductsContainer}>
            {products[0] === undefined 
                ? "No products which match your filters"
                : (
                    <>
                    {products.map(filter => (
                        <div key={filter.id} className={styles.productContainer}>
                            <img src={filter.image} className={styles.img} alt={filter.description} />
                            <p className={styles.title}>{filter.title}</p>
                        </div>
                    ))}
                    </>
                )
            }
        </div>
    )
}
