import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p>Hey, I'm</p>
<img src="8.jpg" alt="logo" style="width:200px;height:200px; border-radius: 50%;">
<h1>Gonzalo Abad</h1>
<p>I 'm a web developer and writer based in Ciudad Real, Spain. I enjoy creating incredibly wonderful things
<a href="mailto: goabad18@outlook.com">Say hello →</a>
</section>`; ;
};
