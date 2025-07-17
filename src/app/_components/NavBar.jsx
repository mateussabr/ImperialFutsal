"use client"
import Image from "next/image"
import styles from "../styles/navbar.module.css"
import LogoTime from "../../../public/logo_time.png"

export function NavBar(){

    
        return(
        <header className={styles.navbar}>
            <nav>
                <div className={styles.informacoes}>
                    <div className={styles.logoContainer}>
                        <Image
                            src={LogoTime}
                            alt="Logo da empresa"
                            width={70}
                            height={90}
                        />
                    </div>
                
                    
                    <ul className={styles.navLinks}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#achievements">Conquistas</a></li>
                        <li><a href="#photos">Fotos</a></li>
                        <li><a href="#cast">Elenco</a></li>
                    </ul>
                </div>
                <div className={styles.socialLink}>
                    <p><a href="https://www.instagram.com/imperialfutsalsjc/">@imperialfutsalsjc</a></p>
                </div>
            </nav>
        </header>
    )    
}