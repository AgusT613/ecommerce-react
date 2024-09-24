import styles from "@/components/homePage/carrousel/carrousel.module.css"
import imageList from "@/utils/carrousel"

export default function Carrousel() {
    return (
        <section className={styles.carrousel}>
          {imageList.map((image, index) => (
            <img key={index} src={image} className={styles.img}/>
          ))}
        </section>
    )
};
