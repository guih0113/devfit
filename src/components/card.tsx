import { Link } from 'react-router'
import { ArrowRight, Dumbbell } from 'lucide-react'

interface CardProps {
  imageSrc: string
  title: string
  description: string
  url: string
}

export function Card({ imageSrc, title, description, url }: CardProps) {
  return (
    <div className="rounded-xl bg-neutral-800 p-1 pb-6">
      <img
        src={imageSrc}
        alt="Imagem de comida"
        className="max-h-45 min-w-92 md:min-w-112.5 rounded-xl object-cover"
      />
      <div className="mt-6 px-6">
        <h1 className="font-bold text-lg text-white">{title}</h1>
        <p className="mt-2 md:w-sm text-neutral-400">{description}</p>
        <Link
          to={url}
          className={
            title === 'Plano de Dieta'
              ? 'mt-6 inline-flex gap-1 w-full rounded-lg bg-amber-300 px-4 py-3 justify-center items-center font-bold text-neutral-900 text-sm hover:bg-amber-400'
              : 'mt-6 inline-flex gap-2 w-full rounded-lg bg-white px-4 py-3 justify-center items-center font-bold text-black text-sm hover:bg-neutral-200'
          }
        >
          {title === 'Plano de Dieta' ? 'Gerar Plano de Dieta' : 'Gerar Plano de Treino'}
          {title === 'Plano de Dieta' ? <ArrowRight className='size-5' /> : <Dumbbell className='size-5' />}
        </Link>
      </div>
    </div>
  )
}
