import { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import styles from "@/components/homePage/productsLayout/productsLayout.module.css"

const BASE_URL = "https://fakestoreapi.com/products"

export default function ProductsLayout({children, limit = 6 }) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchProducts(setState) {
            try {
                const response = await fetch(`${BASE_URL}?limit=${limit}`)
                const data = await response.json()
                setState(data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchProducts(setProducts)
    }, [])

    return (
        <div>
            <article className={styles.productsContainer}>
                {products.map(product => (
                    <ProductItem key={product.description} product={product}/>
                ))}
            </article>
            {children}
        </div>
    )
};
