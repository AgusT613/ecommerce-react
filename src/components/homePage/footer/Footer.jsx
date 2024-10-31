import styles from "@/components/homePage/footer/footer.module.css"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"
import TwitterIcon from "@/assets/twitter.svg"
import FooterSection from "./footerSection/FooterSection"
import NewsLetterForm from "./newsLetterForm/NewsLetterForm"
import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation()

    return (
    <footer className={styles.footer}>
        <div className={styles.wrapperContainer}>
            <FooterSection title={t("homePage.footer.exclusive.title")}>
                <span>{t("homePage.footer.exclusive.subtitle")}</span>
                <span>{t("homePage.footer.exclusive.text")}</span>
                <NewsLetterForm />
            </FooterSection>
            <FooterSection title={t("homePage.footer.support.title")}>
                <ul className={styles.linksContainer}>
                    <a className={styles.linkItem} href="https://www.google.com.ar/maps/preview" target="_blank">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                    <a className={styles.linkItem} href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                    <a className={styles.linkItem} href="tel:+88015-88888-9999">+88015-88888-9999</a>
                </ul>
            </FooterSection>
            <FooterSection title={t("homePage.footer.account.title")}>
                <ul className={styles.linksContainer}>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.account.links.myAccount")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.account.links.login")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.account.links.cart")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.account.links.wishList")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.account.links.shop")}
                    </a>
                </ul>
            </FooterSection>
            <FooterSection title={t("homePage.footer.quickLink.title")}>
                <ul className={styles.linksContainer}>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.quickLink.links.privacyPolicy")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.quickLink.links.termsOfUse")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.quickLink.links.faq")}
                    </a>
                    <a className={styles.linkItem} href="#">
                        {t("homePage.footer.quickLink.links.contact")}
                    </a>
                </ul>
            </FooterSection>
            <FooterSection title={t("homePage.footer.socialMedia.title")}>
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
