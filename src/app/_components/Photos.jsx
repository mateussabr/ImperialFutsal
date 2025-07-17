import styles from "../styles/photos.module.css"

export function Photos() {
  return (
    <section id="photos" className={styles.photos}>
      <div>
        <div className={styles.title}>
          <h2>NOSSAS <br />FOTOS.</h2>
        </div>
        <div className={styles.gallery}>
            <h3>IMPÉRIO</h3>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                <img src="/foto1.png" alt="Foto 1" />
                <img src="/foto2.png" alt="Foto 2" />
                <img src="/foto3.png" alt="Foto 3" />
                <img src="/foto4.png" alt="Foto 4" />
                <img src="/foto1.png" alt="Foto 1" />
                <img src="/foto2.png" alt="Foto 2" />
                <img src="/foto3.png" alt="Foto 3" />
                <img src="/foto4.png" alt="Foto 4" />
            </div>
          </div>
            <h3><span>AZUL</span></h3>
        </div>
      </div>
    </section>
  );
}
