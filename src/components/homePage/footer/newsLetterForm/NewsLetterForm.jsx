import SendIcon from "@/assets/send.svg"
import styles from "@/components/homePage/footer/newsLetterForm/newsLetterForm.module.css"
import { useToast } from "@/hooks/useToast"
import { useTranslation } from "react-i18next"

export default function NewsLetterForm() {
    const { t } = useTranslation()
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataLabel = "newsLetterUsers"

        const form = e.target
        const { email } = Object.fromEntries(new FormData(form))
        const usersAlreadySubscribed = JSON.parse(localStorage.getItem(dataLabel)) || []

        if (usersAlreadySubscribed.includes(email)){
            toast({
                message: t("homePage.footer.exclusive.toast.error"),
                type: "error",
                time: 4000
            })
        } else {
            usersAlreadySubscribed.push(email)
            localStorage.setItem(dataLabel, JSON.stringify(usersAlreadySubscribed))
            form.reset()
            toast({
                message: t("homePage.footer.exclusive.toast.sucess"),
                type: "success",
                time: 4000
            })
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="email" placeholder={t("homePage.footer.exclusive.formPlaceholder")} name="email"/>
            <button>
                <SendIcon />
            </button>
        </form>
    )
};
