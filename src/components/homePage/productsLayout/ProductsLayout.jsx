import { useContext, useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import styles from "@/components/homePage/productsLayout/productsLayout.module.css"
import { ProductSectionPageContext } from "@/context/ProductSectionPageProvider";
import fetchProducts from "@/utils/fetchProducts";

export default function ProductsLayout({children, sectionName}) {
    const [products, setProducts] = useState([])
    const { sectionPage, setMaxPages } = useContext(ProductSectionPageContext)

    let page
    try { page = sectionPage[sectionName].page }
    catch { page = 0 }

    useEffect(()=>{
        fetchProducts()
            .then(data => {
                setProducts(data)
                setMaxPages(data.length)
            })
    }, [])

    if (products[page] === undefined) return <div>Loading...</div>

    return (
        <div>
            <article className={styles.productsContainer}>
                {products[page].map(product => (
                    <ProductItem key={product.description} product={product}/>
                ))}
            </article>
            {children}
        </div>
    )
};
