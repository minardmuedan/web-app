import { Link } from 'react-router-dom'

const SignIn = () => {
   return (
      <div className="flex h-screen items-center justify-center bg-slate-800">
         <Link
            to="/"
            className="absolute left-10 top-10 text-2xl text-cyan-400"
         >
            CineQ
         </Link>
         <div className="h-96 w-80 rounded-xl bg-slate-700 px-4 py-10 text-slate-300 shadow-xl">
            <h1 className="text-center text-lg">
               We're thrilled to have you back!
            </h1>
            <form className="mt-5 flex flex-col justify-between gap-3  ">
               <input
                  type="email"
                  placeholder="type your email"
                  className="w-full rounded-xl border-2 bg-transparent px-3 py-1 focus:outline-none"
               />
               <input
                  type="password"
                  placeholder="type your password"
                  className="w-full rounded-xl border-2 bg-transparent px-3 py-1 focus:outline-none"
               />
               <div className="flex gap-2 px-1 text-sm">
                  <input type="checkbox" className="defa bg-transparent" />
                  <label>Agree terms & conditions</label>
               </div>
               <button
                  type="submit"
                  className="w-full rounded-xl bg-violet-500 px-4 py-2"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   )
}

export default SignIn
