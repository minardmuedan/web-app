import { LuMenu, LuChevronLeft, LuSearch } from 'react-icons/lu'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
   handleClick: () => void
   active: boolean
}

const Navbar = ({ handleClick, active }: Props) => {
   return (
      <nav className="z-50 flex h-14 items-center justify-around bg-slate-700 text-slate-300">
         <button onClick={handleClick}>
            {active ? (
               <LuChevronLeft size="2.1rem" />
            ) : (
               <LuMenu size="2.1rem" />
            )}
         </button>

         <div className=" flex w-64 items-center rounded-xl border-2 border-slate-300 md:w-1/2">
            <div className="flex-1">
               <input
                  type="text"
                  name="search"
                  placeholder="search"
                  className="w-full bg-transparent px-3 py-1 focus:outline-none"
               />
            </div>
            <div className="pe-3">
               <LuSearch size="1.5rem" />
            </div>
         </div>

         <Link to="sign-in">
            <BsFillPersonFill size="1.8rem" />
         </Link>
      </nav>
   )
}

export default Navbar
