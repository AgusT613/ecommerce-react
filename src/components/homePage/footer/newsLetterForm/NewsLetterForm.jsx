import SendIcon from "@/assets/send.svg"
import styles from "@/components/homePage/footer/newsLetterForm/newsLetterForm.module.css"
import { useToast } from "@/hooks/useToast"

export default function NewsLetterForm() {
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataLabel = "newsLetterUsers"

        const form = e.target
        const { email } = Object.fromEntries(new FormData(form))
        const usersAlreadySubscribed = JSON.parse(localStorage.getItem(dataLabel)) || []

        if (usersAlreadySubscribed.includes(email)){
            toast({
                message: "User has already subscribed",
                type: "error",
                time: 4000
            })
        } else {
            usersAlreadySubscribed.push(email)
            localStorage.setItem(dataLabel, JSON.stringify(usersAlreadySubscribed))
            form.reset()
            toast({
                message: "Thanks for subscribing",
                type: "success",
                time: 4000
            })
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your email' name="email"/>
            <button>
                <SendIcon />
            </button>
        </form>
    )
};
