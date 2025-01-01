/* eslint-disable @next/next/no-img-element */
import { IoBookOutline } from 'react-icons/io5'
import { BiBookBookmark } from 'react-icons/bi'
import { PiUserListLight } from 'react-icons/pi'
import { GoBookmark } from 'react-icons/go'

import { AnaliticsItem } from './item'

interface AnaliticsProps {}

export function Analitics({}: AnaliticsProps) {
  return (
    <div className="h-[555px] flex flex-col gap-8 border-l border-l-gray-700">
      <div className="flex flex-col items-center gap-5 pb-2">
        <img
          className="w-[72px] h-[72px] rounded-full border-2 border-green-100"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Rounded avatar"
        />

        <div className="flex flex-col">
          <span className="text-gray-100 font-bold text-xl">Flavio Santos</span>
          <span className="text-gray-400 font-normal text-sm">
            Membro desde 2019
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-14 py-5">
        <AnaliticsItem
          icon={IoBookOutline}
          title="3853"
          subtitle="Paginas lidas"
        />
        <AnaliticsItem
          icon={BiBookBookmark}
          title="10"
          subtitle="Livros avaliados"
        />
        <AnaliticsItem
          icon={PiUserListLight}
          title="8"
          subtitle="Autores lidos"
        />
        <AnaliticsItem
          icon={GoBookmark}
          title="Computacao"
          subtitle="Categoria mais lida"
        />
      </div>
    </div>
  )
}
