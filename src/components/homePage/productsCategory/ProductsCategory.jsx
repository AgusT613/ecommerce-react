import { useEffect, useState } from "react"
import styles from "@/components/homePage/productsCategory/productsCategory.module.css"

const BASE_URL = "https://fakestoreapi.com/products/categories"

export default function ProductsCategory() {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        async function getAllCategories(setState) {
            try{
                const response = await fetch(BASE_URL)
                const data = await response.json()                
                setState(data)
            } catch (e){
                console.error(e);
            }
        }

        getAllCategories(setCategories)
    }, [])

    return (
        <div className={styles.categoriesContainer}>
            {categories.map(category => (
                <a key={category} className={styles.category} href="#">
                    {category.toUpperCase()}
                </a>
            ))}
        </div>
    )
};
