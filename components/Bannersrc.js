import { FaPlay } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { GrFormDown } from "react-icons/gr";
import { motion } from "framer-motion";

const Bannersrc = () => {
    return (
        <section className="container mx-auto sm:px-3 px-2 lg:mt-20 sm:mt-14 mt-7 relative">
            <div>
                {/* ============ title =============== */}
                <motion.h2 className="text-center text-[#18181B] lg:text-5xl sm:text-4xl text-3xl font-semibold"
                    initial={{y: "-50%", opacity:0}}
                    animate={{y:0, opacity: 1}}
                    transition={{duration:1.3}}
                >
                    Make Your Fashion Look <br />
                    More Charming
                </motion.h2>

                {/* ============== Flower Image ============== */}
                {/* ============== img 1 ============== */}
                <img
                    src="/images/flower1.png"
                    alt="flower-image"
                    className="absolute left-5 top-0 lg:h-10 h-7 z-[-1]"
                />
                {/* ============== img 2 ============== */}
                <img
                    src="/images/flower4.png"
                    alt="flower-image"
                    className="absolute right-5 top-0 lg:h-10 h-7 z-[-1]"
                />
                {/* ============== img 3 ============== */}
                <img
                    src="/images/flower2.png"
                    alt="flower-image"
                    className="absolute left-[13rem] top-20 lg:h-10 h-7 z-[-1]"
                />

                {/* ============= Explore Button ============== */}
                <button className="py-[14px] px-[7px] rounded-full border-2 md:flex flex-col items-center text-xs text-[#18181b] border-[#18181b] absolute right-5 hover:border-gray-700 hover:text-gray-700 hidden">
                    <FaPlay/>
                    Explore
                </button>

                {/* ============= Text ================== */}
                <div className="space-y-2 absolute left-3 top-26 md:block hidden">
                    <p className="text-[#18181B] lg:text-sm text-xs">
                        Summer Collection
                    </p>
                    <h4 className="uppercase text-[#18181b] font-[500] lg:text-lg text-sm">
                        TRENDY AND <br />
                        CLUSSI FOR <br />
                        NEW SEASSON <br />
                    </h4>
                </div>

                {/* ================ Image Group ==================== */}                
                <div className="grid md:grid-cols-5 grid-cols-3 lg:gap-x-5 sm:gap-x-3 gap-x-1.5 sm:mt-14 mt-8 items-center">
                    {/* =========== First col ============ */}
                    <div className="md:block hidden">
                        <motion.img
                            initial={{y:"30%", opacity:0}}
                            animate={{y:0, opacity:1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy1.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                    </div>
                    {/* =========== Second col ============ */}
                    <div className="lg:space-y-5 sm:space-y-3 space-y-1.5">
                        <motion.img
                            initial={{y: "-30%", opacity:0}}
                            animate={{y:0, opacity: 1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy2.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                        <motion.img
                            initial={{y: "30%", opacity:0}}
                            animate={{y:0, opacity: 1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy3.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                    </div>
                    {/* =========== Third col ============ */}
                    <div>
                        <motion.img
                            initial={{y: "30%", opacity:0}}
                            animate={{y:0, opacity: 1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy4.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                    </div>
                    {/* =========== Fourth col ============ */}
                    <div className="lg:space-y-5 sm:space-y-3 space-y-1.5">
                        <motion.img
                            initial={{y: "-30%", opacity:0}}
                            animate={{y:0, opacity: 1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy-5.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                        <motion.img
                            initial={{y: "30%", opacity:0}}
                            animate={{y:0, opacity: 1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy6.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                    </div>
                    {/* =========== Five col ============ */}
                    <div className="md:block hidden">
                        <motion.img
                            initial={{y:"-30%", opacity:0}}
                            animate={{y:0, opacity:1}}
                            transition={{duration:1.7}}
                            src="/images/indie-boy-7.png" 
                            alt="indie boy" 
                            className="w-full rounded-xl"
                        />
                        <h4 className="text-center font-[500] text-[#18181B] md:text-lg text-sm mt-2">
                            #2022
                        </h4>
                    </div>
                </div>

                {/* ====================== Quotes ====================== */}
                <div className="max-w-xs text-[#18181b] space-y-2 lg:mt-7 mt-3 absolute left-3 md:block hidden">
                    <ImQuotesLeft className="text-xl"/>
                    <p className="font-[Quicksand] font-[500] lg:text-base text-sm">
                        I’m very much of the ‘buy less but buy better’ persuasion but never really knew where to look
                    </p>
                    <span className="border-b py-1 border-[#FDE68A] lg:text-sm text-xs font-[500] italic"> 
                        - Josh Lachkevic 
                    </span>
                </div>

                {/* ==================== Flower Image ===================== */}
                <img
                    src="/images/flower3.png"
                    alt="flower-image"
                    className="absolute left-1/4 md:mt-36 mt-7 lg:h-10 h-7 z-[-1]"
                />

                {/* ================= date and text ====================== */}
                <div className="max-w-xs absolute right-0 space-y-1 md:flex flex-col items-center lg:mt-20 mt-5 hidden">
                    <span className="text-[#18181b] text-xs font-[500]">
                        31 May 2022. Blog
                    </span>
                    <div className="flex space-x-2 font-[Quicksand]">
                        <h4 className="lg:text-5xl text-3xl font-light text-[#18181b]">
                            01
                        </h4>
                        <h4 className="text-lg text-[#18181b] font-[500]">
                            Alwayse be Strong and have values
                        </h4>
                    </div>
                </div>

                {/* ================== style div ====================== */}
                <div className="bg-[#E7CCAE] w-5 h-14 absolute left-3/4 rounded-tr-[16px] rounded-bl-[16px] z-[-1] mt-7 rotate-[-45deg]"></div>

                {/* ==================== Flower Image ======================== */}
                <img
                    src="/images/flower5.png"
                    alt="flower-image"
                    className="absolute right-10 bottom-34 lg:h-10 h-7 z-[-1]"
                />

                {/* ================================== Button ================================= */}
                <div className="flex justify-center md:mt-28 sm:mt-10 mt-7">
                    <button className="flex items-center py-3 px-5 font-[500] border bg-[#FAFCFF] shadow-xl text-sm rounded-md text-[#18181b] hover:bg-[#F5F6F9]">
                        Srcroll Down <GrFormDown className="ml-1"/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Bannersrc;