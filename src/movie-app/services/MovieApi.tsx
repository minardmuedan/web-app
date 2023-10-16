import { useEffect, useState } from 'react'

export const MovieImg = (image_path: string) => {
   return `https://image.tmdb.org/t/p/w500/${image_path}`
}

export const Movie = (page: number) => {
   const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`
   return Fetch(url)
}

export const Tv = () => {
   const url = 'https://api.themoviedb.org/3/discover/tv'
   return Fetch(url)
}

{
   /*







*/
}
const Fetch = (url: string) => {
   const [result, setResult] = useState<any[]>([])
   console.log(result)
   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDFiZTRhN2I5MzJmMzNkNjQxMGViNzM5ZTAwMWE4ZiIsInN1YiI6IjY1Mjk0OWFhNTQ0YzQxMGRkNjc1OTBhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OaLKe1J4NdA8m4LzQtQLRCrYIOzV_-m4Kp9upX8d4gA',
      },
   }
   useEffect(() => {
      fetch(url, options)
         .then((res) => res.json())
         .then((data) => {
            setResult(data.results)
            console.log(data)
         })
         .catch((err) => console.error('error:' + err))
   }, [])

   return result
}
