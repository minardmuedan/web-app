import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import SideNavbar from '../components/SideNavbar'
import { Outlet } from 'react-router-dom'

const MoviesLayout = () => {
   const [sideNav, setSideNav] = useState(false)

   useEffect(() => {
      if (window.matchMedia('(min-width: 768px)').matches) setSideNav(true)
   }, [])
   return (
      <>
         <header>
            <Navbar handleClick={() => setSideNav(!sideNav)} active={sideNav} />
         </header>

         <div className="flex h-[calc(100vh-3.5rem)] gap-3 bg-slate-900 p-2 text-slate-400">
            <AnimatePresence>
               {sideNav && (
                  <motion.aside
                     exit={{ opacity: 0, transition: { duration: 0.8 } }}
                     className="absolute bottom-0 left-0 z-50 h-[calc(100vh-3.5rem)] w-full bg-slate-300/50 p-2 backdrop-blur-sm md:static md:h-full md:w-fit md:bg-transparent md:p-0"
                  >
                     <SideNavbar />
                  </motion.aside>
               )}
            </AnimatePresence>

            <main className="flex-1 overflow-y-auto">
               <Outlet />
            </main>
         </div>
      </>
   )
}

export default MoviesLayout
