import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsTypeNavLink } from "../../types";

export default function NavLink({ to, children }: PropsTypeNavLink) {
  const pathname = usePathname();
  const isActive = pathname === to;
  const linkClassName = isActive ? "text-yellow-300" : "text-black";
  return (
    <>
      <Link
        href={to}
        className={linkClassName}
      >
        {children}
      </Link>
    </>
  );
}
