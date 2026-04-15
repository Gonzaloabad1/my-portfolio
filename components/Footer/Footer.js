import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "https://x.com/GonzaloCM1993",
      icon: <FaTwitter className="w-10 h-10 text-sky-500 hover:text-sky-700" />,
      label: "Twitter",
    },
    {
      href: "https://github.com/Gonzaloabad1",
      icon: <FaGithub className="w-10 h-10 text-gray-900 hover:text-gray-700" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/gonzaloabadalonso/",
      icon: <FaLinkedin className="w-10 h-10 text-blue-700 hover:text-blue-900" />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/gonzaloabadcm1993/",
      icon: (
        <FaInstagram className="w-10 h-10 text-pink-500 hover:text-pink-700" />
      ),
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/Gonzalo.AbadAlonso",
      icon: (
        <FaFacebook className="w-10 h-10 text-blue-600 hover:text-blue-800" />
      ),
      label: "Facebook",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-gray-100 rounded-2xl shadow-md">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 transition-transform transform hover:scale-110"
        >
          {social.icon}
          <span className="text-sm font-medium text-gray-700">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
}
