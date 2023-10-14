import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
   const typeLink = [
      { title: 'Top IMDB', path: 'imdb' },
      { title: 'Movies', path: 'movies' },
      { title: 'Tv Shows', path: 'tv-shows' },
   ]
   return (
      <motion.div
         initial={{ x: '-100%' }}
         animate={{ x: 0 }}
         exit={{ x: '-100%', transition: { duration: 0.1 } }}
         className="flex h-full w-64 flex-col items-center gap-5 rounded-lg bg-slate-700 px-3 py-10 text-slate-300"
      >
         <Link to="/" className="text-2xl text-cyan-400">
            CineQ
         </Link>
         <div className="flex w-full flex-col gap-2">
            {typeLink.map((v, i) => (
               <Link
                  key={i}
                  to={v.path}
                  className="flex rounded-lg bg-slate-900 px-4 py-2 text-slate-300"
               >
                  {v.title}
               </Link>
            ))}
         </div>

         <div className="flex w-full flex-col gap-1">
            <p>Genre</p>
            <div className="grid grid-cols-2 px-2 text-slate-400">
               {[
                  Array(10)
                     .fill('lorem')
                     .map((v, i) => <p key={i}>{v}</p>),
               ]}
            </div>
         </div>

         <div className="absolute bottom-2 text-center text-sm text-slate-500">
            © 2023 · Minard Parilla
         </div>
      </motion.div>
   )
}

export default SideNavbar
