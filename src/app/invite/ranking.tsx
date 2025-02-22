import Image from 'next/image'
import gold from '../../assets/medal_1.svg'
import silver from '../../assets/medal_2.svg'
import copper from '../../assets/medal_3.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Amanda Ribeiro
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            2000
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Danielle Silva
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1300
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Isis Okamoto
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1000
          </span>

          <Image src={copper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
