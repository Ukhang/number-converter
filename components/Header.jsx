import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Image
import logo from "../public/images/logo.svg";

const Header = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return (
        <header className="md:px-6 px-4 py-4 flex justify-between items-center">
            {/* ==== Left ===== */}
            <div>
                <Image src={logo} alt="logo image" className="max-w-sm" />
            </div>

            {/* ==== Right ===== */}
            <div>
                <button 
                    className="bg-[#BAE6FD] py-1 px-3.5 rounded-lg border-b-4 border-[#655F5F] hover:bg-[#b3dcf3] hover:border-b-[3px]"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    { theme === "light" ? "🌙" : "🌞" }
                </button>
            </div>
        </header>
    )    
}

export default Header;