import AsideNav from '@/components/homePage/asideNav/AsideNav'
import BannerSales from '@/components/homePage/bannerSales/BannerSales'
import Header from '@/components/homePage/header/Header'
import Carrousel from './components/homePage/carrousel/Carrousel'
import styles from "@/components/homePage/homePage.module.css"
import ShopSectionLayout from './components/homePage/shopSectionLayout/ShopSectionLayout'
import FlashSalesTimer from './components/homePage/flashSalesTimer/FlashSalesTimer'
import SlideBtn from './components/homePage/slideBtn/SlideBtn'
import ProductsLayout from './components/homePage/productsLayout/ProductsLayout'
import ViewAllProductsLink from './components/homePage/productsLayout/viewAllProductsLink/ViewAllProductsLink'
import ProductsCategory from './components/homePage/productsCategory/ProductsCategory'
import productItem from "/product-item.png"
import NewArrivalProducts from './components/homePage/newArrivalProducts/NewArrivalProducts'
import ShopServices from './components/homePage/shopServices/ShopServices'
import Footer from './components/homePage/footer/Footer'
import ProductSectionPageProvider from './context/productSectionPage/ProductSectionPageProvider'
import ToastContainer from './components/homePage/toast/toastContainer/ToastContainer'
import ToastProvider from './components/homePage/toast/toastProvider/ToastProvider'
import "@/i18n/config"
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div className={styles.appContentWrapper}>
      <ToastProvider>
        <ToastContainer />
        <BannerSales />
        <Header />

        <div className={styles.contentWrapper}>
          <div className={styles.hero}>
            <AsideNav />
            <Carrousel />
          </div>
          <main>
            <ProductSectionPageProvider>
              <ShopSectionLayout title={"Today's"} sectionHeaderSlot={
                <>
                <FlashSalesTimer />
                <SlideBtn sectionName={"todays"} />
                </>
              }>
                <ProductsLayout sectionName={"todays"}>
                  <div style={{padding: "2rem"}}>
                    <ViewAllProductsLink>View All Products</ViewAllProductsLink>
                  </div>
                </ProductsLayout>
              </ShopSectionLayout>

              <ShopSectionLayout title={"Categories"}>
                <ProductsCategory />
              </ShopSectionLayout>

              <ShopSectionLayout title={"This Month"} sectionHeaderSlot={<ViewAllProductsLink />}>
                <ProductsLayout />
                <div className={styles.productItemImgContainer}>
                  <img src={productItem} alt={t("homePage.main.thisMonth.productItemImgAlt")} className={styles.productItemImg}/>
                </div>
              </ShopSectionLayout>

              <ShopSectionLayout title={"Our Products"} sectionHeaderSlot={<SlideBtn sectionName={"ourProducts"}/>}>
                <ProductsLayout sectionName={"ourProducts"}>
                  <div style={{padding: "2rem"}}>
                    <ViewAllProductsLink>View All Products</ViewAllProductsLink>
                  </div>
                </ProductsLayout>
              </ShopSectionLayout>
            </ProductSectionPageProvider>

            <ShopSectionLayout title={"Featured"}>
              <NewArrivalProducts />
            </ShopSectionLayout>

            <ShopServices />
          </main>
        </div>

        <Footer />
      </ToastProvider>
    </div>
  )
}

export default App
