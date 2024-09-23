import AsideNav from '@/components/homePage/asideNav/AsideNav'
import BannerSales from '@/components/homePage/bannerSales/BannerSales'
import Header from '@/components/homePage/header/Header'
import styles from "@/components/homePage/homePage.module.css"

function App() {

  return (
    <>
    <BannerSales />
    <Header />
    <div className={styles.contentWrapper}>
      <div className={styles.hero}>
        <AsideNav />
        <section className={styles.carrousel}>
          CARROUSEL
        </section>
      </div>
    </div>
    </>
  )
}

export default App
