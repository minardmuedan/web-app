import { MovieImg } from '../services/MovieApi'
import { motion } from 'framer-motion'

interface Props {
   value: any
   handleClick: () => void
}

const MovieContainer = ({ value, handleClick }: Props) => {
   const src = MovieImg(value.poster_path)
   return (
      <motion.div layoutId={`movie-${value.id}`}>
         <div onClick={handleClick} className="cursor-pointer">
            <img src={src} alt="img" className="w-full rounded-t-xl" />

            <p>{value.title != null ? value.title : value.name}</p>
         </div>
      </motion.div>
   )
}

export default MovieContainer
