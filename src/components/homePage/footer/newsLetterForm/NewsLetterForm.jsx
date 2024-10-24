import SendIcon from "@/assets/send.svg"
import styles from "@/components/homePage/footer/newsLetterForm/newsLetterForm.module.css"

export default function NewsLetterForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataLabel = "newsLetterUsers"

        const { email } = Object.fromEntries(new FormData(e.target))
        const usersAlreadySubscribed = JSON.parse(localStorage.getItem(dataLabel)) || []

        if (usersAlreadySubscribed.includes(email)){
            alert("User has already subscribed")
        } else {
            usersAlreadySubscribed.push(email)
            localStorage.setItem(dataLabel, JSON.stringify(usersAlreadySubscribed))
            alert("Thanks for subscribing")
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
