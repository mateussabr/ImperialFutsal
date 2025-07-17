'use client';
import { useState } from "react"
import styles from "../styles/cast.module.css"

export function Cast(){
    const [ativo1, setAtivo1] = useState(true);
    const [ativo2, setAtivo2] = useState(true);
    const [ativo3, setAtivo3] = useState(true);
    const [ativo4, setAtivo4] = useState(true);
    const [ativo5, setAtivo5] = useState(true);
    
    return(
        <section id="cast" className={styles.cast}>
            <div>
                <div className={styles.title}>
                    <h2>NOSSO ELENCO</h2>
                </div>
                <div className={styles.tactical_board}>
                    <div
                        onMouseEnter={() => setAtivo1(false)} 
                        onMouseLeave={() => setAtivo1(true)} 
                    >
                        <p className={`${ativo1 ? styles.hidden : styles.ativo}`}>
                            Professor
                        </p>
                        <div></div>
                    </div>
                    <div
                        onMouseEnter={() => setAtivo2(false)} 
                        onMouseLeave={() => setAtivo2(true)} 
                    >
                        <p className={`${ativo2 ? styles.hidden : styles.ativo}`}>
                            Professor
                        </p>
                        <div></div>
                    </div>
                    <div
                        onMouseEnter={() => setAtivo3(false)} 
                        onMouseLeave={() => setAtivo3(true)} 
                    >
                        <p className={`${ativo3 ? styles.hidden : styles.ativo}`}>
                            Auxiliar
                        </p>
                        <div></div>
                    </div>
                    <div
                        onMouseEnter={() => setAtivo4(false)} 
                        onMouseLeave={() => setAtivo4(true)} 
                    >
                        <p className={`${ativo4 ? styles.hidden : styles.ativo}`}>
                            Auxiliar
                        </p>
                        <div></div>
                    </div>
                    <div
                        onMouseEnter={() => setAtivo5(false)} 
                        onMouseLeave={() => setAtivo5(true)} 
                    >
                        <p className={`${ativo5 ? styles.hidden : styles.ativo}`}>
                            Professor
                        </p>
                        <div></div>
                    </div>
                </div>  
            </div>
        </section>
    )
}