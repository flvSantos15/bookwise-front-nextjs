import { IoIosArrowForward } from "react-icons/io";
import { PiChartLineUp } from 'react-icons/pi'

import { PopularList } from '@/components/PopularList'
import { RecentList } from '@/components/RecentList'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="w-full flex h-[100%] gap-24">
      <Sidebar />

      <div className="flex flex-col gap-10 h-[100%] scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll">
        <div className="flex items-center justify-start gap-3">
          <PiChartLineUp className="w-8 h-8 text-green-100" />

          <p className="text-2xl font-bold leadind-[160%] text-gray-100">
            Início
          </p>
        </div>

        <div className="flex gap-14">
        {/* w-[608px] belongs to below */}
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm text-gray-100">
              Avaliações mais recentes
            </p>

            <RecentList />
          </div>

          <div className="flex flex-col gap-4">
            {/* w-[324px] belongs to above */}
            <div className="flex items-center justify-between">
              <p className="font-normal text-sm text-gray-100">
                Livros mais recentes
              </p>

              <button className="flex items-center gap-2 text-purple-100 font-bold text-sm">
                Ver todos

                <IoIosArrowForward className="w-4 h-4" />
              </button>
            </div>

            <PopularList />
          </div>
        </div>
      </div>
    </div>
  )
}
