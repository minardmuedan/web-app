import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

const SideNavbar = () => {
   const genres = [
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
   const [seletedGenre, setSelectedGenre] = useState<any[]>([])

   const [movieDropDown, setMovieDropDown] = useState(false)
   const [tvDropDown, setTvDropDown] = useState(false)
   const links = [
      {
         title: 'Movies',
         contents: [
            { path: 'movies/', name: 'Now Playing' },
            { path: 'movies/popular', name: 'Popular' },
            { path: 'movies/top_rated', name: 'Top Rated' },
            { path: 'movies/upcoming', name: 'Upcoming' },
         ],
         dd: movieDropDown,
         setDd: () => setMovieDropDown(!movieDropDown),
      },
      {
         title: 'Tv Shows',
         contents: [
            { path: 'tv-shows/', name: 'Airing Today' },
            { path: 'tv-shows/popular', name: 'Popular' },
            { path: 'tv-shows/on_the_air', name: 'On Tv' },
            { path: 'tv-shows/top_rated', name: 'Top Rated' },
         ],
         dd: tvDropDown,
         setDd: () => setTvDropDown(!tvDropDown),
      },
   ]

   const handleClickGenre = (id: number) => {
      if (seletedGenre.includes(id)) {
         setSelectedGenre(
            seletedGenre.filter((v) => {
               return v != id
            })
         )
      } else setSelectedGenre([...seletedGenre, id])
   }
   return (
      <motion.div
         initial={{ x: '-100%' }}
         animate={{ x: 0 }}
         exit={{ x: '-100%', transition: { duration: 0.1 } }}
         className=" h-full overflow-y-scroll"
      >
         <div className="relative flex min-h-full w-64 flex-col items-center gap-5  rounded-lg bg-slate-700 px-3 py-10 text-slate-300">
            <Link to="/" className="text-2xl text-cyan-400">
               CineQ
            </Link>
            <div className="flex w-full flex-col gap-2">
               {links.map((link, i) => (
                  <div key={i}>
                     <div
                        onClick={link.setDd}
                        className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-slate-700 px-4 py-2 text-slate-300 hover:bg-slate-800 aria-[current]:bg-slate-900"
                     >
                        <p>{link.title}</p>
                        <IoChevronDown />
                     </div>

                     <AnimatePresence>
                        {link.dd && (
                           <div>
                              {link.contents.map((contentlinks, index) => (
                                 <NavLink
                                    key={index}
                                    to={contentlinks.path}
                                    className="block rounded-lg px-7 py-1 text-slate-400 aria-[current]:bg-slate-900"
                                 >
                                    <motion.p
                                       initial={{ x: -50, opacity: 0 }}
                                       animate={{
                                          x: 0,
                                          opacity: 1,
                                          transition: { delay: index * 0.1 },
                                       }}
                                       exit={{
                                          x: -50,
                                          opacity: 0,
                                          transition: { delay: index * 0.1 },
                                       }}
                                       className=" hover:text-cyan-400 "
                                    >
                                       {contentlinks.name}
                                    </motion.p>
                                 </NavLink>
                              ))}
                           </div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>

            <div className="flex w-full flex-col gap-1">
               <p>Genre</p>
               <div className="grid grid-cols-2 gap-1 px-2 text-slate-400">
                  {[
                     genres.map((genre) => (
                        <button
                           key={genre.id}
                           onClick={() => handleClickGenre(genre.id)}
                           className={`cursor-pointer rounded-lg px-2 py-1 text-start text-sm ${
                              seletedGenre.includes(genre.id) && 'bg-slate-900'
                           }`}
                        >
                           {genre.name}
                        </button>
                     )),
                  ]}
               </div>
            </div>

            <div className="absolute bottom-2 text-center text-sm text-slate-500">
               © 2023 · Minard Parilla
            </div>
         </div>
      </motion.div>
   )
}

export default SideNavbar
