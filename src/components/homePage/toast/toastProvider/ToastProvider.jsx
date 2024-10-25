import { createContext, useState } from "react"

export const ToastContext = createContext(null)

export default function ToastProvider({ children }) {
    const [toastList, setToastList] = useState([])

    return (
        <ToastContext.Provider value={{ toastList, setToastList }}>
            {children}
        </ToastContext.Provider>
    )
};
