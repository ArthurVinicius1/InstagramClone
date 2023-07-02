"use client";

import { useState } from "react";
import Image from "next/image";
import Perfil from "@/images/eu.jpg";

export default function Post({
  nome,
  foto,
  texto,
  descricao,
  fotoPublicacao,
  comentarios,
  visualizacoes,
  curtidas,
  elemento
}) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white shadow rounded-lg max-w-xl place-self-center">
      <div className="flex flex-row px-2 py-3 mx-3">
        <div className="w-auto h-auto rounded-full border-2 border-red-500">
          <Image
            className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
            alt="User avatar"
            src={foto}
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col mb-2 ml-4 mt-1">
          <div className="text-gray-600 text-sm font-semibold transition hover:text-purple-600 hover:cursor-pointer text-bold">{nome}</div>
          <div className="flex w-full mt-1">
            <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
              {elemento}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100" />
      <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
        <Image width={1080} height={768} className="rounded w-full" src={fotoPublicacao} />
      </div>
      <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">{texto}</div>
      <div className="text-gray-500 text-sm mb-6 mx-3 px-2">{descricao}</div>
      <div className="flex justify-start mb-4 border-t border-gray-100">
        <div className="flex justify-end w-full mt-1 pt-2 pr-5">
          <button className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2 grid place-content-center">
            <svg
            className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="20px"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button onClick={() => setLiked((p) => !p)} className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 w-8 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer grid place-content-center">
            <svg
              className={`transition-colors w-5 h-5 text-red-500 ${liked && "fill-red-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex w-full border-t border-gray-100">
        <div className="mt-3 mx-5 flex flex-row text-xs">
          <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
            Comentários:
            <div className="ml-1 text-gray-400 text-ms"> {comentarios}</div>
          </div>
          <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
            Vizualizações:{" "}
            <div className="ml-1 text-gray-400 text-ms"> {visualizacoes}</div>
          </div>
        </div>
        <div className="mt-3 mx-5 w-full flex justify-end text-xs">
          <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
            Curtidas:{" "}
            <div className="ml-1 text-gray-400 text-ms">{liked ? curtidas + 1 : curtidas}</div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
        <Image
          className="object-cover rounded-full shadow mr-2 cursor-pointer"
          alt="User avatar"
          src={Perfil}
          width={40}
          height={40}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-6">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
          >
            <svg
              className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
          style={{ borderRadius: 25 }}
          placeholder="Comentar ..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}
