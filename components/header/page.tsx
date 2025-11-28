"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-950 shadow-lg font-serif">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center py-4 px-4 sm:px-0">

          {/* Burger (mobile) */}
          <div
            className="sm:hidden flex flex-col gap-[6px] cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-[3px] w-7 bg-[#F5F5DC] rounded transition-all ${
                open ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-7 bg-[#F5F5DC] rounded transition-all ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-7 bg-[#F5F5DC] rounded transition-all ${
                open ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </div>

          {/* Nom centré */}
          <a
            className="text-[#F5F5DC] text-3xl font-semibold whitespace-nowrap"
            href=""
          >
            Lucas Heymans
          </a>

          {/* Espace vide pour équilibrer */}
          <div className="w-7 sm:w-auto"></div>

          {/* Menu desktop */}
          <div className="hidden sm:flex gap-16 text-xl">
            <ul className="flex gap-12 text-[#F5F5DC]">
              <li><a href="">Mes dessins</a></li>
              <li><a href="">Tarif</a></li>
            </ul>

            <ul className="flex gap-12 text-[#F5F5DC]">
              <li><a href="">A propos</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="sm:hidden flex flex-col items-center gap-4 pb-4 text-[#F5F5DC] text-xl">
            <a href="">Mes dessins</a>
            <a href="">Tarif</a>
            <a href="">A propos</a>
            <a href="">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}