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
          <ProductsLayout>
            <div style={{padding: "2rem"}}>
              <ViewAllProductsLink>View All Products</ViewAllProductsLink>
            </div>
          </ProductsLayout>
        </ShopSectionLayout>

        <ShopSectionLayout title={"Categories"} subtitle={"Browse by Category"}>
          <ProductsCategory />
        </ShopSectionLayout>

        <ShopSectionLayout title={"This Month"} subtitle={"Best Selling Products"} sectionHeaderSlot={<ViewAllProductsLink />}>
          <ProductsLayout limit={3}/>
          <div className={styles.productItemImgContainer}>
            <img src={productItem} alt="black speaker that enhaces your music experience" className={styles.productItemImg}/>
          </div>
        </ShopSectionLayout>
      </main>
    </div>
    </>
  )
}

export default App
