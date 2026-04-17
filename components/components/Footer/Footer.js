import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<h2>Contact</h2>

<h2 class="hover:text-gold transition-colors">
    <a href="https://gonzaloabad-design.vercel.app" target="_blank">Web</a>
</h2>

<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkedin.png", "LinkedIn")}
${Button("/icons/telegram.png", "Telegram")}
</div>
`;
