import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";
const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
Home();
changeTheme();// Busca donde escuchas los clics del navbar y añade este
const webLink = document.querySelector("#weblink");
if (webLink) {
    webLink.addEventListener("click", (e) => {
        // Al ser un enlace externo, no queremos que el Router de tu web antigua
        // intente cargar una página interna. El navegador lo abrirá solo.
        console.log("Navegando a la web profesional...");
    });
}

footer.insertAdjacentHTML("beforebegin", Divider());
