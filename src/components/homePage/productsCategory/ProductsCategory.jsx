import { useEffect, useState } from "react"
import styles from "@/components/homePage/productsCategory/productsCategory.module.css"
import { useTranslation } from "react-i18next"
import { PRODUCT_CATEGORIES } from "@/utils/apiUrls"
import fetchFromFakeStoreApi from "@/utils/fetchFromFakeStoreApi"

export default function ProductsCategory() {
    const { t } = useTranslation()
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetchFromFakeStoreApi(PRODUCT_CATEGORIES)
            .then(categories => setCategories(categories))
    }, [])

    return (
        <div className={styles.categoriesContainer}>
            {categories.map(category => (
                <a key={category} className={styles.category} href="#">
                    {t(`homePage.main.categories.categoryList.${category.toCamelCase()}`)}
                </a>
            ))}
        </div>
    )
};
