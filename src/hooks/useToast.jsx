import { ToastContext } from "@/components/homePage/toast/toastProvider/ToastProvider";
import { useContext } from "react";

export function useToast() {
    const { setToastList } = useContext(ToastContext)

    const createToast = ({ message, type, time = 3000 }) => {
        const toast = {
            id: Date.now(),
            message,
            type
        }
        setToastList(prevState => ([...prevState, toast]))

        setTimeout(() => {
            deleteToast(toast.id)
        }, time);
    }

    const deleteToast = id => {
        setToastList(prevState => (prevState.filter(toast => toast.id !== id)))
    }

    return createToast
}