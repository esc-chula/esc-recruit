import Image from "next/image";

export default function BottomRightLogo() {
  return (
    <Image
      src="/logo.svg"
      width={24}
      height={24}
      alt={"esc logo"}
      className="absolute bottom-6 right-6 select-none"
    />
  );
}
