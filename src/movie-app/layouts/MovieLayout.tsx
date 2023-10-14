import Loaders from '../components/Loaders'
import MovieContainer from '../components/MovieContainer'
import { Movie } from '../services/MovieApi'

const MovieLayout = () => {
   const result = Movie()
   return (
      <main className="grid grid-cols-2 gap-2 overflow-y-auto px-2 text-slate-300 sm:grid-cols-4 lg:grid-cols-6">
         {result
            ? result.map((value, index) => (
                 <MovieContainer
                    key={index}
                    image_path={value.poster_path}
                    release_date={value.release_date}
                    title={value.title}
                    overview={value.overview}
                    vote_average={value.vote_average}
                 />
              ))
            : Array(12)
                 .fill(0)
                 .map((_, i) => (
                    <div key={i}>
                       <Loaders />
                    </div>
                 ))}
      </main>
   )
}

export default MovieLayout
