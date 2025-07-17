"use client"
import { useState, useRef, useEffect } from "react";
import styles from "../styles/achievements.module.css";

  const titulos = [
    "Copa Embraer 2025",
    "Copa Clubes 2025 (sub 10 - sub 12)",
    "Copa Nascente do Tietê 2024",
    "Copa Nova Geração 2024",
    "Copa Ubabalo 2024",
    "Copa Embraer 2024",
    "Copa Urupes 2023 (sub 8 - sub 10)",
    "Copa Sesc 2023"
  ];

  const qtd_titulo = [1, 2, 1, 1, 1, 1, 2, 1];

  const photo = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png"
  ];

export function Achievements() {
  const step = 4;
  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const windowRef = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Função para ativar arraste
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - windowRef.current.offsetLeft;
    scrollLeft.current = windowRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - windowRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Velocidade do arraste
    windowRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - windowRef.current.offsetLeft;
    scrollLeft.current = windowRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - windowRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    windowRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Navegação por botão >
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % Math.ceil(titulos.length / step));
  };

  return (
    <section id="achievements" className={styles.achievements}>
      <h2 className={styles.title}>NOSSAS 10 <span className="golden">★ ESTRELAS</span></h2>

      <div className={styles.carousel}>
        <div
          className={styles.window}
          ref={windowRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.track} ref={trackRef}>
            {
              Array.from({ length: Math.ceil(titulos.length / step) }).map((_, i) => (
                <div className={styles.group} key={i}>
                  {titulos.slice(i * step, i * step + step).map((titulo, j) => {
                    const globalIndex = i * step + j;
                    const isHovered = hoveredIndex === globalIndex;

                    return (
                      <div
                        key={j}
                        className={styles.card}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          backgroundImage: isHovered
                            ? `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url(/${photo[globalIndex]})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className={styles.title_}><p>{titulo}</p></div>
                        <div className={styles.qtd_title}><p>{qtd_titulo[globalIndex]}x</p></div>
                      </div>
                    );
                  })}
                </div>
              ))
            }
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.next}`} onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
}
