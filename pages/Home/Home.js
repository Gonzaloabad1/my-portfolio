import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p>Hey, I'm</p>
<h1>Gonzalo Abad</h1>
<p>I'm a FullStack Designer and developer and writer born in Ciudad Real. I enjoy creating fanstastic things.<p> 
</section>`;
};
