import ImageDesktop from "./image-header-desktop.jpg";
import ImageMobile from "./image-header-mobile.jpg";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.image__desktop}
          alt="Happy office workers."
          src={ImageDesktop.src}
        />
        <img
          className={styles.image__mobile}
          alt="Happy office workers."
          src={ImageMobile.src}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Get <span className={styles.title__highlight}>insights</span> that
            help your business grow.
          </h1>
          <p className={styles.description}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className={styles.statistics}>
          <div className={styles.datapoint}>
            <h1 className={styles.datapoint__title}>10k+</h1>
            <h2 className={styles.datapoint__label}>COMPANIES</h2>
          </div>
          <div className={styles.datapoint}>
            <h1 className={styles.datapoint__title}>314</h1>
            <h2 className={styles.datapoint__label}>TEMPLATES</h2>
          </div>
          <div className={styles.datapoint}>
            <h1 className={styles.datapoint__title}>12M+</h1>
            <h2 className={styles.datapoint__label}>QUERIES</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
