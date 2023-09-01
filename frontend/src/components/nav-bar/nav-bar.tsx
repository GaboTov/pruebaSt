"use client";

import Link from "next/link";
import NavLink from "./nav-link";

export default function NavBar() {
  return (
    <>
      <nav className={`p-6 gap-10 flex flex-row justify-end mr-10`}>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/clientes"}>Clientes</NavLink>
        <NavLink to={"/agendar_citas"}>Agendar citas</NavLink>
        <NavLink to={"/citas"}>Citas</NavLink>
      </nav>
    </>
  );
}
