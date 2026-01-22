import { ArrowRight, Dumbbell } from 'lucide-react'
import { Link } from 'react-router'

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
        className="max-h-45 min-w-92 rounded-xl object-cover md:min-w-112.5"
      />
      <div className="mt-6 px-6">
        <h1 className="font-bold text-lg text-white">{title}</h1>
        <p className="mt-2 text-neutral-400 md:w-sm">{description}</p>
        <Link
          to={url}
          className={
            title === 'Plano de Dieta'
              ? 'mt-6 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-amber-300 px-4 py-3 font-bold text-neutral-900 text-sm hover:bg-amber-400'
              : 'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-bold text-black text-sm hover:bg-neutral-200'
          }
        >
          {title === 'Plano de Dieta' ? 'Gerar Plano de Dieta' : 'Gerar Plano de Treino'}
          {title === 'Plano de Dieta' ? (
            <ArrowRight className="size-5" />
          ) : (
            <Dumbbell className="size-5" />
          )}
        </Link>
      </div>
    </div>
  )
}
