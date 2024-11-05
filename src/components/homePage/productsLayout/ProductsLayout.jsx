import { useContext, useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import styles from "@/components/homePage/productsLayout/productsLayout.module.css"
import { ProductSectionPageContext } from "@/context/productSectionPage/ProductSectionPageProvider";
import divideInChunks from "@/utils/divideInChunks";
import fetchFromFakeStoreApi from "@/utils/fetchFromFakeStoreApi";
import { PRODUCTS } from "@/utils/apiUrls";

export default function ProductsLayout({ children, sectionName = "todays" }) {
    const [products, setProducts] = useState([])
    const { pages, dispatch } = useContext(ProductSectionPageContext)
    const page = pages[sectionName].page

    useEffect(()=>{
        fetchFromFakeStoreApi(PRODUCTS)
            .then(data => {
                const chunks = divideInChunks(data)
                setProducts(chunks)
                dispatch({ type: "SET_MAX_PAGES", sectionName, maxPages: chunks.length })
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
