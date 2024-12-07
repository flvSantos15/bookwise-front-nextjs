export function CardWithDescription() {
  return (
    <div className="flex px-6 py-5 gap-6 items-start rounded-lg bg-purple-400 hover:border-2 hover:border-solid hover:border-purple-300">
      <div className="w-[108px] h-[152px] rounded-[4px] border border-solid border-[red]"></div>

      <div className="flex flex-col justify-between items-start flex-1">
        <div className="flex flex-col items-start gap-3">
          <div className="flex justify-between items-center">
            <p className="text-sm font-normal text-gray-300">Hoje</p>

            <div className="flex items-center gap-1 border border-solid border-[blue]"></div>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-base font-bold text-gray-100">
              Entendo Algoritmos
            </p>
            <p className="text-sm font-normal text-gray-400">Aditya Bhargava</p>
          </div>
        </div>

        <p className="text-sm font-normal text-gray-300">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </div>
    </div>
  )
}
