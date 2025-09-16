import Image from "next/image";

export function ArrancaYaLogo({ className = "", ...props }) {
  return (
    <Image
      src="/logosinf.png"
      alt="ArrancaYa Logo"
      width={56}
      height={56}
      className={className}
      {...props}
    />
  );
}
