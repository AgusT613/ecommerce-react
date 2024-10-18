import { useContext, useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import styles from "@/components/homePage/productsLayout/productsLayout.module.css"
import { ProductSectionPageContext } from "@/context/ProductSectionPageProvider";
import fetchProducts from "@/utils/fetchProducts";

export default function ProductsLayout({children, sectionName}) {
    const [products, setProducts] = useState([])
    const { sectionPage, setSectionPage } = useContext(ProductSectionPageContext)
    const page = sectionPage[sectionName].page

    useEffect(()=>{
        fetchProducts()
            .then(data => {
                const maxPages = data.length
                setProducts(data)
                
                // Setting max pagination number
                setSectionPage({
                ...sectionPage, [sectionName]: {
                    ...sectionPage[sectionName], maxPages
                }
            })
            
            
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
