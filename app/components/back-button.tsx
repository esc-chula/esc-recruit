import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute left-4 top-6 flex items-center space-x-1 text-identity-cloud"
    >
      <FiChevronLeft />
      <span>กลับ</span>
    </Link>
  );
}
