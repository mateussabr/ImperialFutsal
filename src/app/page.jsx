import styles from "./styles/page.module.css";
import { Home } from "./_components/Home"
import { About } from "./_components/About";
import {Achievements} from "./_components/Achievements"
import { Photos } from "./_components/Photos"
import { WhatsApp } from "./_components/WhatsApp"
import { Cast } from "./_components/Cast"


export default function Page() {
  return (
    <>  

      <WhatsApp />
      <Home />
      <About />
      <Achievements />
      <Photos />   
      <Cast />
    </>
  );
}
