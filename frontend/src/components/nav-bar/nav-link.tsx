import Link from "next/link";
import { usePathname } from "next/navigation";
import { propsTypeNavLink } from "../../../types";

export default function NavLink({ to, children }: propsTypeNavLink) {
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
