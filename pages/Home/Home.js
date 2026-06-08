import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<img src="https://pbs.twimg.com/profile_images/1454073836555620358/Lt2ZvywE_400x400.jpg" alt="Descripción de la imagen" width="500" height="300">
<p>Hey, I'm</p>
<h1>Gonzalo Abad</h1>
<p>I'm a FullStack Designer and developer and writer born in Ciudad Real. I enjoy creating fanstastic things.<p> 
</section>`;
};
