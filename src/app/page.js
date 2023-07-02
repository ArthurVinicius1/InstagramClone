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
import FotoBulba from "@/images/bulba.jpg";
import FotoCharizard from "@/images/charizard.jpg";
import FotoPikachu from "@/images/pikachu.jpg";
import FotoGyrados from "@/images/gyrados.jpg";
import FotoGengar from "@/images/gengar.jpg";
import Perfil from "@/images/eu.jpg";
import Mewtwo from "@/images/375px-0150Mewtwo.png";
import Lucario from "@/images/375px-0448Lucario.png";
import Sceptile from "@/images/375px-0254Sceptile.png";
import Dragonite from "@/images/375px-0149Dragonite.png";
import Lapras from "@/images/375px-0131Lapras.png";

const listaUsuarios = [
  { nome: "Charizard", foto: Charizard },
  { nome: "Pikachu", foto: Pikachu },
  { nome: "Bulbasaur", foto: Bulbasaur },
  { nome: "Jigglypuff", foto: Jigglypuff },
  { nome: "Eevee", foto: Eevee },
  { nome: "Snorlax", foto: Snorlax },
  { nome: "Gyarados", foto: Gyrados },
];

const listaDePosts = [
  {
    nome: "Charizard",
    foto: Charizard,
    elemento: "Chamas",
    texto: "Batalha Épica",
    descricao: "Minha batalha contra esse grande oponente",
    fotoPublicacao: FotoCharizard,
    comentarios: 12,
    visualizacoes: 1000,
    curtidas: 150,
  },
  {
    nome: "Pikachu",
    foto: Pikachu,
    elemento: "Elétrico",
    texto: "Baladinha",
    descricao: "Eu agora sou o Mc Pikachu",
    fotoPublicacao: FotoPikachu,
    comentarios: 25,
    visualizacoes: 5000,
    curtidas: 356,
  },
  {
    nome: "Bulbasaur",
    foto: Bulbasaur,
    elemento: "Grama",
    texto: "Floresta boa",
    descricao: "Curtindo minhas férias",
    fotoPublicacao: FotoBulba,
    comentarios: 87,
    visualizacoes: 20000,
    curtidas: 2000,
  },
  {
    nome: "Gyrados",
    foto: Gyrados,
    elemento: "Água",
    texto: "HASUASHDUDAHS",
    descricao: "GLUB GLUB GLUB TUBARÃO POKÉMON",
    fotoPublicacao: FotoGyrados,
    comentarios: 32,
    visualizacoes: 10000,
    curtidas: 600,
  },
  {
    nome: "Gengar",
    foto: Gengar,
    elemento: "Fantasma",
    texto: "eu e meus manos",
    descricao: "de canto...",
    fotoPublicacao: FotoGengar,
    comentarios: 65,
    visualizacoes: 15000,
    curtidas: 1000,
  },
];

const opcoes = [
  "Sobre",
  "Ajuda",
  "Imprensa",
  "API",
  "Carreiras",
  "Privacidade",
  "Termos",
  "Localizações",
  "Idioma",
  "Meta Verified",
];

const sugestoes = [
  { nome: "LUCARIO", foto: Lucario },
  { nome: "LAPRAS", foto: Lapras },
  { nome: "SCEPTILE", foto: Sceptile },
  { nome: "MEWTWO", foto: Mewtwo },
  { nome: "DRAGONITE", foto: Dragonite },
];

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="grid place-content-center flex-1 p-12 gap-6">
          <div className="flex justify-center gap-6">
            {listaUsuarios.map((usuario) => {
              return (
                <div className="grid justify-items-center rounded-full hover:cursor-pointer">
                  <div className="border-2 border-red-600 border-spacing-5 rounded-full">
                    <Image
                      src={usuario.foto.src}
                      width={60}
                      height={60}
                      className="ronded-full bg-transparent transition hover:scale-110"
                      alt=""
                    />
                  </div>
                  <p className="text-violet-700 font-bold transition hover:scale-110 hover:text-red-500 uppercase">
                    {usuario.nome}
                  </p>
                </div>
              );
            })}
          </div>

          {listaDePosts.map((publicacao, index) => {
            return <Post key={index} {...publicacao} />;
          })}
        </div>

        <div className="flex-initial px-6 flex flex-col gap-4 h-screen sticky right-0 top-0">
          <div className="flex gap-2 items-center mt-12">
            <Image
              src={Perfil}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold uppercase hover:cursor-pointer text-red-500 ml-auto transition hover:scale-110 hover:font-bold hover:text-violet-700">
                ArthurVinicius1
              </p>
              <p className="text-xs font-bold text-red-500 ml-auto uppercase">Arthur Vinícius</p>
            </div>
            <button className="text-blue-500 ml-auto text-xs transition hover:scale-110 hover:font-bold uppercase">
              Mudar
            </button>
          </div>
          <div>
            <p className="text-gray-500 font-bold">Sugestões para você</p>
            <div className="flex flex-col gap-4">
              {sugestoes.map((sugestao, index) => {
                return (
                  <div className="flex gap-2 items-center">
                    <Image
                      src={sugestao.foto.src}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold hover:cursor-pointer text-red-500 transition hover:scale-110 hover:font-bold hover:text-violet-700">
                        {sugestao.nome}
                      </p>
                    </div>

                    <button className="text-blue-500 ml-auto text-xs transition hover:scale-110 hover:font-bold uppercase">
                      Seguir
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <ul className="grid grid-cols-2 mb-6">
            {opcoes.map((opcao, index) => {
              return (
                <li
                  key={index}
                  className="hover:cursor-pointer hover:underline before:content-['\00B7'] before:mx-1 text-gray-500 text-sm"
                >
                  {opcao}
                </li>
              );
            })}
          </ul>
          <p className="text-gray-500 text-xs">
            © 2023 POKÉGRAM FROM ARTHURViNÍCIUS1
          </p>
        </div>
      </div>
    </>
  );
}
