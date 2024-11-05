import fetchFromFakeStoreApi from "@/utils/fetchFromFakeStoreApi"
import { useEffect, useRef, useState } from "react"
import styles from "@/components/homePage/header/searchItems/searchItems.module.css"
import FilteredProducts from "./FilteredProducts"
import { useTranslation } from "react-i18next"
import { PRODUCTS } from "@/utils/apiUrls"

export default function SearchItems() {
    const { t } = useTranslation()
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [isOnSearch, setIsOnSearch] = useState(false)
    const alreadySearched = useRef(false)

    useEffect(()=>{
        fetchFromFakeStoreApi(PRODUCTS)
            .then(data => setProducts(data))
    }, [])

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase()
        if (inputValue === "") {
            setFilters([])
            alreadySearched.current = false
        }
        else {
            const productsFiltered = products.filter(product => product.title.toLowerCase().includes(inputValue))
            setFilters(productsFiltered)
            alreadySearched.current = true
        }

    }

    return (
        <>
        <input 
            className={styles.searchBox} 
            type="text" 
            placeholder={t("homePage.header.actions.searchPlaceholder")}
            onChange={handleInputChange} 
            onFocus={()=> setIsOnSearch(true)} 
            onBlur={()=> setIsOnSearch(false)}
        />
        {isOnSearch && <FilteredProducts products={filters} alreadySearched={alreadySearched.current} />}
        </>
    )
}
