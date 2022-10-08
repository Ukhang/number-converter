import React, { useState } from "react";
import List from "./List";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {

    // ================= Hooks ======================
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
          <nav className="container mx-auto sm:px-3 px-2 py-3.5 border-b lg:flex justify-between items-center hidden">
            {/* ============== Logo ============ */}
            <div>
                <img
                    src="/images/logo.png"
                    width={110}
                    height={30}
                    loading="lazy"
                    alt="logo-image"
                />
            </div>

            {/* ============== Menu ================== */}
            <ul className="flex items-center xl:space-x-14 space-x-10">
                {List.map((curVal) => (
                    <li key={curVal.id}>
                        <Link href={curVal.link}>
                            <a className="font-[500] text-[#18181B] hover:underline"> 
                                {curVal.name} 
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* ===================== Button ============================== */}
            <div className="flex items-center xl:space-x-9 space-x-7">
                {/* =========== Search Button ============= */}
                <button className="text-[#18181b] font-semibold text-xl hover:text-gray-700">
                    <GoSearch/>
                </button>
                {/* =========== profile Button ============= */}
                <button className="text-[#18181b] font-semibold text-xl hover:text-gray-700">
                    <CgProfile/>
                </button>
                {/* =========== Shop Button ============= */}
                <button className="font-semibold text-2xl hover:bg-gray-700 px-1.5 py-1.5 rounded-full bg-[#18181b] text-white">
                    <TiShoppingCart/>
                </button>
            </div>
          </nav>

          {/* ======================= Mobile Nav ==================== */}
          <nav className="container mx-auto sm:px-3 px-2 py-3.5 border-b flex justify-between items-center lg:hidden">
                {/* ================ Left Part =================== */}
                <div>
                    {/* ============== Logo ============ */}
                    <img
                        src="/images/logo.png"
                        width={110}
                        height={30}
                        loading="lazy"
                        alt="logo-image"
                    />
                </div>

                {/* ===================== Menu and Button =========================== */}
                <div className={`absolute w-full left-0 bg-[#ffffff] shadow-xl top-[4.1rem] z-10 transition ${showMenu == true ? "translate-x-0" : "translate-x-[-100%]"}`}>
                    <div className="container mx-auto px-3 pt-6 pb-8 flex flex-col space-y-7">
                        {/* ============= Menu ================== */}
                        <ul className="flex flex-col space-y-4">
                            {List.map((curVal) => (
                                <li key={curVal.id}>
                                    <Link href={curVal.link}>
                                        <a className="font-[500] text-[#18181B]"> 
                                            {curVal.name} 
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* ================= Button =================== */}
                        <div className="flex items-center xl:space-x-9 space-x-7">
                            {/* =========== Search Button ============= */}
                            <button className="text-[#18181b] font-semibold text-xl hover:text-gray-700">
                                <GoSearch/>
                            </button>
                            {/* =========== profile Button ============= */}
                            <button className="text-[#18181b] font-semibold text-xl hover:text-gray-700">
                                <CgProfile/>
                            </button>
                            {/* =========== Shop Button ============= */}
                            <button className="font-semibold text-2xl hover:bg-gray-700 px-1.5 py-1.5 rounded-full bg-[#18181b] text-white">
                                <TiShoppingCart/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================ Right Part =================== */}
                <div>
                    {/* =================== Toggle Button (Pad and Mobile View) ======================== */}
                    <button 
                        className="text-[#18181b] font-semibold text-2xl hover:text-gray-700"
                        onClick={() => (showMenu == false) ? setShowMenu(true) : setShowMenu(false)}>
                        <GoThreeBars/>
                    </button>
                </div>
          </nav>
        </>
    )
}

export default Navbar;