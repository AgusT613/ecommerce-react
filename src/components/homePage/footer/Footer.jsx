import styles from "@/components/homePage/footer/footer.module.css"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"
import TwitterIcon from "@/assets/twitter.svg"
import FooterSection from "./footerSection/FooterSection"
import NewsLetterForm from "./newsLetterForm/NewsLetterForm"

export default function Footer() {
    return (
    <footer className={styles.footer}>
        <div className={styles.wrapperContainer}>
            <FooterSection title={"Exclusive"}>
                <span>Subscribe</span>
                <span>Get 10% off your first order</span>
                <NewsLetterForm />
            </FooterSection>
            <FooterSection title={"Support"}>
                <ul className={styles.linksContainer}>
                    <a className={styles.linkItem} href="https://www.google.com.ar/maps/preview" target="_blank">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                    <a className={styles.linkItem} href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                    <a className={styles.linkItem} href="tel:+88015-88888-9999">+88015-88888-9999</a>
                </ul>
            </FooterSection>
            <FooterSection title={"Account"}>
                <ul className={styles.linksContainer}>
                    <a className={styles.linkItem} href="#">My Account</a>
                    <a className={styles.linkItem} href="#">Login / Register</a>
                    <a className={styles.linkItem} href="#">Cart</a>
                    <a className={styles.linkItem} href="#">Wishlist</a>
                    <a className={styles.linkItem} href="#">Shop</a>
                </ul>
            </FooterSection>
            <FooterSection title={"Quick Link"}>
                <ul className={styles.linksContainer}>
                    <a className={styles.linkItem} href="#">Privacy Policy</a>
                    <a className={styles.linkItem} href="#">Terms of Use</a>
                    <a className={styles.linkItem} href="#">FAQ</a>
                    <a className={styles.linkItem} href="#">Contact</a>
                </ul>
            </FooterSection>
            <FooterSection title={"Social Media"}>
                <div className={styles.socialMediaLinksContainer}>
                    <div><InstagramIcon /></div>
                    <div><FacebookIcon /></div>
                    <div><TwitterIcon /></div>
                </div>
            </FooterSection>
        </div>
    </footer>
    )
};
