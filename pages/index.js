import Image from "next/image";
import HeadTag from "../components/HeadTag"
import { motion } from "framer-motion";
import Header from "../components/Header";
import Convert from "../components/Convert";
import Footer from "../components/Footer";

// Image
import chathuman from "../public/images/chathuman.svg";
import chatrobot from "../public/images/chatrobot.svg";
import computer from "../public/images/computer.png";

export default function Home() {
  return (
    <div className="bg-[#F6F8FF] dark:bg-[#26272b]">
      <div className="min-h-screen flex flex-col max-w-5xl mx-auto">
        {/* ======== Head Tag ====== */}
        <HeadTag/>

        {/* ======== Header ======= */}
        <Header/>

        {/* ====== Main ======== */}
        <main>
          {/* ========= Chat Section ============ */}
          <section className="lg:max-w-3xl md:max-w-2xl mx-auto flex justify-between items-start mt-16">
            {/* ===== left chat ====== */}
            <motion.div
              initial={{y:"50%", opacity: 0 }}
              animate={{y:0, opacity: 1}}
              transition={{delayChildren: 0.3, staggerChildren: 0.2, type: "spring"}}
            >
              <Image src={chathuman} alt="human-chat image" className="w-auto" />
            </motion.div>
            
            {/* ===== right chat ====== */}
            <motion.div
              initial={{y:"50%", opacity: 0 }}
              animate={{y:0, opacity: 1}}
              transition={{delay: 0.3, type: "spring", stiffness: 100}}
              className="mt-14"
            >
              <Image src={chatrobot} alt="robot-chat image" className="w-auto" />
            </motion.div>
          </section>

          {/* ======= Pc Section ======== */}
          <section className="flex items-center justify-center">
            <div className="md:mt-[-5rem] mt-[-2rem]">
              <Image src={computer} alt="computer image" width={450} height={350}/> 
            </div>
          </section>

          {/* ===== Convert section ===== */}
          <Convert/>
        </main>

        {/* =============== Footer ============= */}
        <Footer/>
      </div>
    </div>
  )
}