import Loaders from '../components/Loaders'
import Modal from '../components/Modal'
import MovieContainer from '../components/MovieContainer'
import { Movie } from '../services/MovieApi'
import { useState } from 'react'
const MovieLayout = () => {
   const [page, setPage] = useState(2)

   const [selectedMovie, setSelectedMovie] = useState<object | null>(null)
   //const movieLists = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming']
   const result = Movie(page)

   return (
      <main className="p-2">
         <Modal
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
         />
         <p className=" text-3xl text-slate-300">Now Playing</p>
         <div className="mb-5 mt-2 grid grid-cols-2 gap-2 overflow-y-auto text-slate-300 sm:grid-cols-4 lg:grid-cols-5">
            {result.length > 0
               ? result.map((value, index) => (
                    <MovieContainer
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
            <button
               onClick={() => setPage(page + 1)}
               className="w-1/3 rounded-xl bg-cyan-400 py-2"
            >
               Load More
            </button>
         </div>
      </main>
   )
}

export default MovieLayout
