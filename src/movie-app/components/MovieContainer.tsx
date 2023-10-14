import { MovieImg } from '../services/MovieApi'

interface Props {
   image_path: string
   title: string
   release_date: string
   overview: string
   vote_average: string
}

const MovieContainer = ({ image_path, title }: Props) => {
   const src = MovieImg(image_path)
   return (
      <div>
         <a href="#">
            <img src={src} alt="img" className="w-full rounded-t-xl" />

            <p>{title}</p>
         </a>
      </div>
   )
}

export default MovieContainer
