import Image from "next/image"
import LogoWhatsApp from "../../../public/logo_whatsapp.png"
import styles from "../styles/whatsapp.module.css"


export function WhatsApp(){
    return(
        <div className={styles.whatsapp}>
            <a href="https://wa.me/+5512997199660">
                <Image
                    src={LogoWhatsApp}
                    width={50}
                    height={50}
                    alt="contato whatsapp"
                    className={styles.img}
                />
            </a>
        </div>
    )
}