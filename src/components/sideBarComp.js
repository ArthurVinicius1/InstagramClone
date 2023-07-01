"use client"

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { LuClapperboard } from "react-icons/lu";
import { PiMessengerLogoBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import {SiPokemon} from "react-icons/si";

export default function SideBar() {
  const listas = [
    { nome: "Home", icon: GoHomeFill },
    { nome: "Search", icon: FiSearch },
    { nome: "Explorar", icon: ImCompass2 },
    { nome: "Reels", icon: LuClapperboard },
    { nome: "Message", icon: PiMessengerLogoBold },
    { nome: "Notificação", icon: AiOutlineHeart },
    { nome: "Criar", icon: AiOutlinePlusSquare },
    { nome: "Perfil", icon: CgProfile },
    { nome: "Menu", icon: HiOutlineMenu },
  ];
  return (
    <nav className="border-r flex flex-col h-screen py-2 px-3 pb-5">
      <div className="pt-6 px-3 pb-4 text-2xl mb-8 ">
      <SiPokemon className="fill-red-500" size={100}/>
      </div>
      <ul className="flex flex-col h-full gap-6">
        {listas.map((lista, index) => {
          return (
            <button className={`flex gap-2 items-center text-red-500 transition hover:scale-110 pr-8 ${index === listas.length -1 && "mt-auto"}`} key={index}>
              <lista.icon size={32} />
              <p>{lista.nome}</p>
            </button>
          );
        })}
      </ul>
    </nav>
  );
}
