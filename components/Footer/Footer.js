import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
        <FaTwitter className="w-10 h-10 text-blue-500 hover:text-blue-700" />
      </a>
      <a href="https://github.com/Gonzaloabad1" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
        <FaGithub className="w-10 h-10 text-gray-900 hover:text-gray-700" />
      </a>
      <a href="https://www.linkedin.com/in/gonzaloabadalonso/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
        <FaLinkedin className="w-10 h-10 text-blue-700 hover:text-blue-900" />
      </a>
    </div>
  );
}
