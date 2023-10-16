import './App.css'
import RootLayout from './movie-app/layouts/RootLayout'
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom'
import LandingPage from './movie-app/pages/LandingPage'
import SignIn from './movie-app/pages/SignIn'
import Upcoming from './movie-app/pages/movies/Upcoming'
import NowPlaying from './movie-app/pages/movies/NowPlaying'
import MoviePopular from './movie-app/pages/movies/MoviePopular'
import MovieTopRated from './movie-app/pages/movies/MovieTopRated'
import AiringToday from './movie-app/pages/tv/AiringToday'
import TvPopular from './movie-app/pages/tv/TvPopular'
import TvTopRated from './movie-app/pages/tv/TvTopRated'
import OnTheAir from './movie-app/pages/tv/OnTheAir'

const App = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="sign-in" element={<SignIn />} />

            <Route path="/" element={<RootLayout />}>
               <Route path="movies">
                  <Route index element={<NowPlaying />} />
                  <Route path="popular" element={<MoviePopular />} />
                  <Route path="top_rated" element={<MovieTopRated />} />
                  <Route path="upcoming" element={<Upcoming />} />
               </Route>

               <Route path="tv-shows">
                  <Route index element={<AiringToday />} />
                  <Route path="on_the_air" element={<OnTheAir />} />
                  <Route path="popular" element={<TvPopular />} />
                  <Route path="top_rated" element={<TvTopRated />} />
               </Route>
            </Route>
         </Route>
      )
   )
   return <RouterProvider router={router}></RouterProvider>
}

export default App
