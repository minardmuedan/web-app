import { Link } from 'react-router-dom'
const LandingPage = () => {
   return (
      <div className="flex h-screen flex-col items-center justify-center gap-5 bg-slate-800 text-slate-300">
         <h1 className="text-5xl">LandingPage</h1>
         <Link
            to="movies"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-slate-800"
         >
            Go to Movies
         </Link>
      </div>
   )
}

export default LandingPage
