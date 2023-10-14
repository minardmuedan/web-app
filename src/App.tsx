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
import TvLayout from './movie-app/layouts/TvLayout'
import MovieLayout from './movie-app/layouts/MovieLayout'

const App = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="sign-in" element={<SignIn />} />

            <Route path="/" element={<RootLayout />}>
               <Route path="movies" element={<MovieLayout />} />
               <Route path="tv-shows" element={<TvLayout />} />
            </Route>
         </Route>
      )
   )
   return <RouterProvider router={router}></RouterProvider>
}

export default App
