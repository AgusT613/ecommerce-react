import fetchProducts from "@/utils/fetchProducts"
import { useEffect, useState } from "react"
import styles from "@/components/homePage/header/searchItems/searchItems.module.css"
import FilteredProducts from "./FilteredProducts"

export default function SearchItems() {
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [isOnSearch, setIsOnSearch] = useState(false)

    useEffect(()=>{
        fetchProducts()
            .then(data => setProducts(data))
    }, [])

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        if (inputValue === "") setFilters([])
        else {
            const productsFiltered = products.filter(product => product.title.toLowerCase().includes(inputValue))
            setFilters(productsFiltered)
        }
    }

    return (
        <>
        <input 
            className={styles.searchBox} 
            type="text" 
            placeholder="What are you looking for?" 
            onChange={handleInputChange} 
            onFocus={()=> setIsOnSearch(true)} 
            onBlur={()=> setIsOnSearch(false)}
        />
        {isOnSearch && <FilteredProducts products={filters}/>}
        </>
    )
}
