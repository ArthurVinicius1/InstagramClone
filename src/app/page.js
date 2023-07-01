import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import Charizard from "@/images/375px-0006Charizard.png";
import Pikachu from "@/images/375px-0025Pikachu.png";
import Bulbasaur from "@/images/180px-0001Bulbasaur.png";
import Jigglypuff from "@/images/375px-0039Jigglypuff.png";
import Eevee from "@/images/375px-0133Eevee.png";
import Snorlax from "@/images/375px-0143Snorlax.png";
import Gyrados from "@/images/375px-0130Gyarados.png";
import Gengar from "@/images/375px-0094Gengar.png";
import Post from "@/components/PostComponent";

export default function Home() {
  const listaUsuarios = [
    { nome: "Charizard", foto: Charizard },
    { nome: "Pikachu", foto: Pikachu },
    { nome: "Bulbasaur", foto: Bulbasaur },
    { nome: "Jigglypuff", foto: Jigglypuff },
    { nome: "Eevee", foto: Eevee },
    { nome: "Snorlax", foto: Snorlax },
    { nome: "Gyarados", foto: Gyrados },
    { nome: "Gengar", foto: Gengar },
  ];

  return (
    <>
      <div className="flex justify-center gap-6">
        {listaUsuarios.map((usuario) => {
          return (
            <div className="grid justify-items-center rounded-full">
              <div className="border-2 border-red-600 border-spacing-5 rounded-full">
                <Image
                  src={usuario.foto.src}
                  width={60}
                  height={60}
                  className="ronded-full bg-transparent transition hover:scale-110"
                  alt=""
                />
              </div>
              {usuario.nome}
            </div>
          );
        })}
      </div>
      <Post />
    </>
  );
}
