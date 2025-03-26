import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-8 h-8 text-blue-500 hover:text-blue-700" />
      </a>
      <a href="https://github.com/Gonzaloabad1" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-8 h-8 text-gray-900 hover:text-gray-700" />
      </a>
      <a href="https://www.linkedin.com/in/gonzaloabadalonso/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900" />
      </a>
    </div>
  );
}
