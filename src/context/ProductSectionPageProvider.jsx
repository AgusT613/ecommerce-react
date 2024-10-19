import { createContext, useEffect, useState } from "react"

export const ProductSectionPageContext = createContext(undefined)

export default function ProductSectionPageProvider({children}) {
    const [maxPages, setMaxPages] = useState(undefined)
    const [sectionPage, setSectionPage] = useState({
        todays: { page: 0 },
        ourProducts: { page: 0 }
    })

    useEffect(()=>{
        setSectionPage({
            todays: {
                page: 0,
                maxPages
            },
            ourProducts: {
                page: 0,
                maxPages
            }
        })
    }, [maxPages])

    return (
        <ProductSectionPageContext.Provider value={{ sectionPage, setSectionPage, setMaxPages }}>
            {children}
        </ProductSectionPageContext.Provider>
    )
};
