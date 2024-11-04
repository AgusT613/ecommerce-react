import styles from "@/components/homePage/header/searchItems/searchItems.module.css"
import { useTranslation } from "react-i18next"

export default function FilteredProducts({ products }) {
    const { t } = useTranslation()

    return (
        <div className={styles.filteredProductsContainer}>
            {products[0] === undefined 
                ? t("components.searchItems.noProductsFiltered")
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
