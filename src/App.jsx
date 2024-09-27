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
// Images
import productItem from "/product-item.png"
import productItem2 from "/product-item-2.png"
import productItem3 from "/product-item-3.png"
import productItem4 from "/product-item-4.png"
import productItem5 from "/product-item-5.png"

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
          <ProductsLayout limit={3} />
          <div className={styles.productItemImgContainer}>
            <img src={productItem} alt="black speaker that enhaces your music experience" className={styles.productItemImg}/>
          </div>
        </ShopSectionLayout>

        <ShopSectionLayout title={"Our Products"} subtitle={"Explore Our Products"} sectionHeaderSlot={<SlideBtn />}>
          <ProductsLayout>
            <div style={{padding: "2rem"}}>
              <ViewAllProductsLink>View All Products</ViewAllProductsLink>
            </div>
          </ProductsLayout>
        </ShopSectionLayout>

        <ShopSectionLayout title={"Featured"} subtitle={"New Arrival"}>
          <div className={styles.newProductArrivalsContainer}>
            <figure className={styles.imgContainer}>
              <img src={productItem2} alt="playstation 5" />
            </figure>
            <figure className={styles.imgContainer}>
              <img src={productItem3} alt="women's collections" />
            </figure>
            <figure className={styles.imgContainer}>
              <img src={productItem4} alt="speakers" />
            </figure>
            <figure className={styles.imgContainer}>
              <img src={productItem5} alt="perfume" />
            </figure>
          </div>
        </ShopSectionLayout>
      </main>
    </div>
    </>
  )
}

export default App
