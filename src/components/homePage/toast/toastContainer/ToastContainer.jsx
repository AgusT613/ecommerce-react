import styles from "@/components/homePage/toast/toastContainer/toastContainer.module.css"
import { useContext } from "react"
import { ToastContext } from "../toastProvider/ToastProvider"

export function Toast({ toastParams }) {
    const { message, type } = toastParams
    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            {message}
        </div>
    )
}

export default function ToastContainer() {
    const { toastList } = useContext(ToastContext)
    return (
        <div className={styles.toastContainer}>
            {toastList.length !== 0 && toastList.map(toast => (
                <Toast toastParams={toast} key={toast.id}/>
            ))}
        </div>
    )
};
