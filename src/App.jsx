import AsideNav from '@/components/homePage/asideNav/AsideNav'
import BannerSales from '@/components/homePage/bannerSales/BannerSales'
import Header from '@/components/homePage/header/Header'
import Carrousel from './components/homePage/carrousel/Carrousel'
import styles from "@/components/homePage/homePage.module.css"
import ShopSectionLayout from './components/homePage/shopSectionLayout/ShopSectionLayout'
import FlashSalesTimer from './components/homePage/flashSalesTimer/FlashSalesTimer'
import SlideBtn from './components/homePage/slideBtn/SlideBtn'

function App() {

  return (
    <>
    <BannerSales />
    <Header />
    <div className={styles.contentWrapper}>
      <div className={styles.hero}>
        <AsideNav />
        <Carrousel />
      </div>
      <main>
        <ShopSectionLayout title={"Today's"} subtitle={"Flash Sales"} sectionHeaderSlot={
          <>
          <FlashSalesTimer />
          <SlideBtn />
          </>
        }>
          PRODUCTS
        </ShopSectionLayout>
      </main>
    </div>
    </>
  )
}

export default App
