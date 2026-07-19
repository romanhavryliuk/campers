import Link from "next/link";
import styles from "./HeroBanner.module.css";

// банер на головній: фото на всю ширину, заголовок і кнопка переходу в каталог
export default function HeroBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className="btn btn-solid">
          View Now
        </Link>
      </div>
    </section>
  );
}
