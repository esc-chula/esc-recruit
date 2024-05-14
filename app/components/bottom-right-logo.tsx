import Image from "next/image";

export default function BottomRightLogo() {
  return (
    <Image
      src="/logo.svg"
      width={24}
      height={24}
      alt={"esc logo"}
      className="absolute right-6 bottom-6 select-none"
    />
  );
}
