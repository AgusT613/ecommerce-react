import SendIcon from "@/assets/send.svg"
import styles from "@/components/homePage/footer/newsLetterForm/newsLetterForm.module.css"

export default function NewsLetterForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your email' />
            <button>
                <SendIcon />
            </button>
        </form>
    )
};
