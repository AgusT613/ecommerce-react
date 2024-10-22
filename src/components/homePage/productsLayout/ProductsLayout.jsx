import { useContext, useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import styles from "@/components/homePage/productsLayout/productsLayout.module.css"
import { ProductSectionPageContext } from "@/context/productSectionPage/ProductSectionPageProvider";
import fetchProducts from "@/utils/fetchProducts";

export default function ProductsLayout({ children, sectionName = "todays" }) {
    const [products, setProducts] = useState([])
    const { pages, dispatch } = useContext(ProductSectionPageContext)
    const page = pages[sectionName].page

    useEffect(()=>{
        fetchProducts()
            .then(data => {
                setProducts(data)
                dispatch({ type: "SET_MAX_PAGES", sectionName, maxPages: data.length })
            })
    }, [])

    return (
        <div>
            <article className={styles.productsContainer}>
                {products[page] === undefined ? (
                    Array.from([0,1,2,3,4,5]).map(product => (
                        <ProductItem key={product} />
                    ))
                ) : (
                    products[page].map(product => (
                        <ProductItem key={product.description} product={product}/>
                    ))
                )}
            </article>
            {children}
        </div>
    )
};
