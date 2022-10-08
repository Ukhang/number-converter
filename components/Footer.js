import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="container mx-auto sm:px-3 px-2 mt-auto">
            {/* =================== First Sec ===================== */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-10 lg:gap-y-0 gap-y-7 lg:justify-items-center">
                {/* =========== First Part ============ */}
                <div>
                    {/* ===== logo ====== */}
                    <div>
                        <img
                            src="/images/logo.png" 
                            width={150}
                            height={40}
                            loading="lazy"
                            alt="logo-image"
                        />
                    </div>

                    <div className="flex flex-col space-y-3 mt-4">
                        {/* ================== Location ================ */}
                        <Link href="/">
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                1828 Johns Drive Glenview, IL 60025 
                            </a>
                        </Link>
                        {/* ================== Phone number ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                (224) 228-8475
                            </a>
                        </Link>
                        {/* ================== Gmail ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Opentic@gmail.com
                            </a>
                        </Link>
                        {/* ================== Website ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">     
                                www.opentic.com
                            </a>
                        </Link>
                    </div>
                </div>

                {/* =========== Second Part ============ */}
                <div>
                    {/* ===== Head Text ====== */}
                    <div>
                        <h2 className="text-[#1F2937] underline font-semibold text-base"> 
                            Quick Link
                        </h2>
                    </div>

                    <div className="flex flex-col space-y-3 mt-4">
                        {/* ================== 1st ================ */}
                        <Link href="/">
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Home
                            </a>
                        </Link>
                        {/* ================== 2nd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Features
                            </a>
                        </Link>
                        {/* ================== 3rd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                About
                            </a>
                        </Link>
                        {/* ================== 4rd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">      
                                Blog
                            </a>
                        </Link>
                    </div>
                </div>

                {/* =========== Third Part ============ */}
                <div>
                    {/* ===== Head Text ====== */}
                    <div>
                        <h2 className="text-[#1F2937] underline font-semibold text-base"> 
                            Support
                        </h2>
                    </div>

                    <div className="flex flex-col space-y-3 mt-4">
                        {/* ================== 1st ================ */}
                        <Link href="/">
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Quick Support
                            </a>
                        </Link>
                        {/* ================== 2nd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">      
                                Privecy Policiy
                            </a>
                        </Link>
                        {/* ================== 3rd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">       
                                Copyright
                            </a>
                        </Link>
                        {/* ================== 4rd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">       
                                Tearm and Condition
                            </a>
                        </Link>
                        {/* ================== 5th ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">     
                                Testimonial
                            </a>
                        </Link>
                    </div>
                </div>

                {/* =========== Four Part ============ */}
                <div>
                    {/* ===== Head Text ====== */}
                    <div>
                        <h2 className="text-[#1F2937] underline font-semibold text-base"> 
                            My Account
                        </h2>
                    </div>

                    <div className="flex flex-col space-y-3 mt-4">
                        {/* ================== 1st ================ */}
                        <Link href="/">
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Managed Account
                            </a>
                        </Link>
                        {/* ================== 2nd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">      
                                Created Account
                            </a>
                        </Link>
                        {/* ================== 3rd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">      
                                Downlood Software
                            </a>
                        </Link>
                        {/* ================== 4rd ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Support Center
                            </a>
                        </Link>
                        {/* ================== 5th ================ */}
                        <Link href="/"> 
                            <a className="text-slate-500 text-sm hover:text-[#1f2937]">    
                                Account security
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            {/* =================== Last Sec ================= */}
            <div className="border-t border-gray-300 mt-8">
                <div className="container mx-auto px-2 py-5">
                    <p className="text-[#1F2937] text-center text-sm">
                        &copy; 2021 Opentic. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;