import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

export default function SocialMedia() {
  return (
    <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center">
      <Link
        href="https://www.instagram.com/escchula/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1.5"
      >
        <FiInstagram />
        <p className="text-sm">escchula</p>
      </Link>
    </div>
  );
}
