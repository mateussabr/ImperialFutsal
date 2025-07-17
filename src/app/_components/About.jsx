import Image from "next/image";
import styles from "../styles/about.module.css";
import Time from "../../../public/foto_time_about.png";

export function About() {
  return (
    <section className={styles.about}>
      <aside className={styles.sidebar}>
        <Image
          src={Time}
          alt="Time lendário"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.overlay}></div>
      </aside>

      <div>
        <h2 id="about" className={styles.title}>NOSSA HISTÓRIA</h2>
        <div className={styles.textWrapper}>
          <div className={styles.textColumn}>
            <p>
              <b>O</b> futsal sempre foi mais do que um jogo para quem viveu o nascimento do Soberana Futsal, criado originalmente em 1997. O time surgiu de forma espontânea, formado por amigos e frequentadores da tradicional lanchonete Soberana, com menções honrosas para o Sr Edvaldo e a Sra Ditinha, carregando o nome do lugar que os unia. Mesmo com estrutura simples, o time marcou história ao participar de vários campeonatos locais — e vencer todos. Com talento, garra e união, o Soberana Futsal rapidamente se tornou um símbolo de respeito nas quadras. Mas após essa fase vitoriosa, o time interrompeu suas atividades, deixando lembranças e saudade em quem viveu aqueles momentos.

              Em 2019, o sonho começou a se reerguer. Márcio Roberto, determinado a reacender essa chama, trouxe de volta o Soberana Futsal com uma nova proposta. A iniciativa teve como base as aulas de futsal realizadas na Quadra dos Professores, localizada na Vila Tesouro, onde crianças e jovens voltaram a sentir a emoção do esporte coletivo. O projeto, mais do que competitivo, começou a formar caráter, disciplina e oportunidades para muitos. Durante esse período, o nome Soberana voltou a ecoar pelas quadras da região.
            </p>
          </div>
          <div className={styles.textColumn}>
            <p>
              <b>M</b>as foi em 2022 que uma nova era começou. Com um time mais estruturado, metas mais ambiciosas e uma visão ainda mais profissional, o projeto passou a se chamar Imperial Futsal. Com esse novo nome, o clube deu um passo importante rumo à consolidação de sua identidade no cenário esportivo local. E os resultados não tardaram a vir: títulos, destaque em torneios e o respeito das demais equipes. O Imperial rapidamente se firmou como uma potência em quadra, herdando a alma guerreira do antigo Soberana e elevando ainda mais o nível.Hoje, o Imperial Futsal é mais do que um clube: é um símbolo de resistência, renascimento e paixão pelo esporte. Representa não apenas os atletas que vestem a camisa, mas toda uma comunidade que acredita na força do coletivo. O time carrega o orgulho de um passado vitorioso e a ambição de um futuro ainda mais grandioso. A trajetória iniciada em 1997 segue viva, vibrante e vitoriosa. O Imperial veio para ficar — e sua história está longe de terminar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
