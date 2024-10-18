import { createContext, useState } from "react"

export const ProductSectionPageContext = createContext()

export default function ProductSectionPageProvider({children}) {
    const [sectionPage, setSectionPage] = useState({
        todays: {
            page: 0,
            maxPages: undefined
        },
        ourProducts: {
            page: 0,
            maxPages: undefined
        },
        thisMonth: {
            page: 0,
            maxPages: undefined
        }
    })

    return (
        <ProductSectionPageContext.Provider value={{ sectionPage, setSectionPage }}>
            {children}
        </ProductSectionPageContext.Provider>
    )
};
