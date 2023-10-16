import { Link } from 'react-router-dom'
import Loaders from '../components/Loaders'
import Modal from '../components/Modal'
import MovieBox from '../components/MovieBox'
import { Movie } from '../services/MovieApi'
import { useState } from 'react'

interface Props {
   title: string
   watch: string
}

const MovieLayout = ({ title, watch }: Props) => {
   const [selectedMovie, setSelectedMovie] = useState<object | null>(null)
   const result = Movie(watch)

   return (
      <main className="p-2">
         <Modal
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
         />
         <p className=" ms-5 text-5xl text-slate-300">{title}</p>
         <div className="my-5 grid grid-cols-2 gap-2 overflow-y-auto text-slate-300 sm:grid-cols-4 lg:grid-cols-5">
            {result.length > 0
               ? result.map((value, index) => (
                    <MovieBox
                       key={index}
                       value={value}
                       handleClick={() => setSelectedMovie(value)}
                    />
                 ))
               : Array(15)
                    .fill(0)
                    .map((_, i) => (
                       <div key={i}>
                          <Loaders />
                       </div>
                    ))}
         </div>
         <div className="flex items-center justify-center">
            <Link to="page" className="w-1/3 rounded-xl bg-cyan-400 py-2">
               Load More
            </Link>
         </div>
      </main>
   )
}

export default MovieLayout
