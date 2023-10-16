import { MovieImg } from '../services/MovieApi'
import { AnimatePresence, motion } from 'framer-motion'
import { BsXLg } from 'react-icons/bs'

interface Props {
   selectedMovie: any | null
   setSelectedMovie: any
}

const Modal = ({ selectedMovie, setSelectedMovie }: Props) => {
   const movieGenres = [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
   ]

   return (
      <AnimatePresence>
         {selectedMovie != null && (
            <motion.div
               onClick={() => setSelectedMovie(null)}
               className="fixed inset-0 z-40 flex items-center justify-center px-5 backdrop-blur-md"
            >
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                  exit={{ y: -100, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[90%]  w-full flex-col overflow-y-auto overflow-x-hidden  md:w-3/4"
               >
                  <div
                     style={
                        selectedMovie.backdrop_path != null
                           ? {
                                backgroundImage: `url(${MovieImg(
                                   selectedMovie.backdrop_path
                                )})`,
                             }
                           : { backgroundColor: 'rgb(30 41 59)' }
                     }
                     className="bg-cover bg-fixed bg-center"
                  >
                     <button
                        onClick={() => setSelectedMovie(null)}
                        className="absolute right-5 top-5 z-50 lg:hidden"
                     >
                        <BsXLg size="2.5rem" color="black" />
                     </button>

                     <div className="flex flex-col gap-5 bg-slate-300/60 p-5 backdrop-blur-sm lg:flex-row">
                        <motion.img
                           layoutId={`movie-${selectedMovie.id}`}
                           src={MovieImg(selectedMovie.poster_path)}
                           className="w-1/2 md:w-96"
                        />
                        <div className="flex flex-1 flex-col gap-2 bg-cover bg-center text-slate-800">
                           <motion.h1
                              initial={{ x: 100, opacity: 0 }}
                              animate={{
                                 x: 0,
                                 opacity: 1,
                                 transition: { delay: 0.4 },
                              }}
                              className="text-3xl text-slate-900"
                           >
                              {selectedMovie.title
                                 ? selectedMovie.title
                                 : selectedMovie.name}
                           </motion.h1>
                           <motion.div
                              initial={{ x: 100, opacity: 0 }}
                              animate={{
                                 x: 0,
                                 opacity: 1,
                                 transition: { delay: 0.6 },
                              }}
                              className="grid grid-cols-2 gap-2"
                           >
                              <p>
                                 <span>
                                    Original
                                    {selectedMovie.original_title
                                       ? ' title: '
                                       : ' name: '}
                                 </span>
                                 {selectedMovie.original_title
                                    ? selectedMovie.original_title
                                    : selectedMovie.original_name}
                              </p>
                              <p>
                                 <span>Language: </span>
                                 {'(' + selectedMovie.original_language + ')'}
                              </p>
                              <p>
                                 <span>Vote average: </span>
                                 {selectedMovie.vote_average}
                              </p>
                              <p>
                                 <span>
                                    {selectedMovie.release_date
                                       ? 'Released: '
                                       : 'First air: '}{' '}
                                 </span>
                                 {selectedMovie.release_date
                                    ? selectedMovie.release_date
                                    : selectedMovie.first_air_date}
                              </p>
                           </motion.div>
                           <motion.p
                              initial={{ x: 100, opacity: 0 }}
                              animate={{
                                 x: 0,
                                 opacity: 1,
                                 transition: { delay: 0.8 },
                              }}
                           >
                              <span>Overview </span>:
                              {selectedMovie.overview
                                 ? selectedMovie.overview
                                 : 'not specified'}
                           </motion.p>

                           <motion.p
                              initial={{ x: 100, opacity: 0 }}
                              animate={{
                                 x: 0,
                                 opacity: 1,
                                 transition: { delay: 1 },
                              }}
                           >
                              Genre:
                              {selectedMovie.genre_ids.map(
                                 (v: any) =>
                                    movieGenres.some(
                                       (movieGenre) => movieGenre.id === v
                                    ) && ' noo'
                              )}
                           </motion.p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   )
}

export default Modal
