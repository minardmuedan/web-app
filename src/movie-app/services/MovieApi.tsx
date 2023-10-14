import { useEffect, useState } from 'react'

export const MovieImg = (image_path: string) => {
   return `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${image_path}`
}

export const Movie = () => {
   const [result, setResult] = useState<any[]>([])
   const url = 'https://api.themoviedb.org/3/discover/movie'

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

export const Tv = () => {
   const [result, setResult] = useState<any[]>([])
   const url = 'https://api.themoviedb.org/3/discover/tv'

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
