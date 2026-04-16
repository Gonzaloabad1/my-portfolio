import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  
  // Es buena práctica verificar si 'main' existe antes de limpiar
  if (main) {
    cleanPage(main);
    main.innerHTML = `
      <section class="home">
        <p>Hey, I'm</p>
        <img src="8.jpg" alt="Gonzalo Abad" class="home-profile-img">
        <h1>Gonzalo Abad</h1>
        <p>I'm a web developer and writer based in Ciudad Real, Spain. 
           I enjoy creating incredibly wonderful things.</p>
        <a href="https://gonzaloabad1.github.io/Web-gonzalo/" class="say-hello-link">Say hello →</a>
      </section>
    `;
  }
};
