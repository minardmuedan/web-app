import { motion } from 'framer-motion'

const Loaders = () => {
   return (
      <div className=" relative flex flex-col gap-2 overflow-hidden">
         <div className=" h-72 w-full rounded-t-xl bg-slate-700"></div>

         <div className="h-2 w-1/2 rounded-xl bg-slate-700"></div>

         {/* shiny thing */}
         <motion.div
            animate={{
               x: '300%',
               transition: {
                  duration: 1.3,
                  repeat: Infinity,
                  repeatDelay: 1,
               },
            }}
            className="absolute -left-1/2 top-0 h-full w-1/2 bg-slate-300/10"
         ></motion.div>
      </div>
   )
}

export default Loaders
