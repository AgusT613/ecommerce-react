import { createContext, useReducer } from "react"
import reducer from "@/context/productSectionPage/reducer"

export const ProductSectionPageContext = createContext(undefined)

const initialState = {
    todays: {
        page: 0,
        maxPages: undefined
    },
    ourProducts: {
        page: 0,
        maxPages: undefined
    }
}

export default function ProductSectionPageProvider({ children }) {
    const [pages, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductSectionPageContext.Provider value={{ pages, dispatch }}>
            {children}
        </ProductSectionPageContext.Provider>
    )
};
