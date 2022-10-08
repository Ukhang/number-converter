import { AiFillStar } from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";

const Sales = () => {
    return (
        <section className="container mx-auto sm:px-3 px-2 lg:mt-20 sm:mt-16 mt-14">
            <div>
                {/* ============== title ============== */}
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold text-[#18181B]">
                    Sales<span className="text-[#FDCE74]">_</span>
                </h2>

                {/* ================= Image ================== */}
                <div className="flex justify-end mt-5">
                    <img
                        src="/images/sales-image.png"
                        width={264}
                        height={282}
                        loading="lazy"
                        alt="sales-image"
                        className="shadow-2xl rounded-xl"
                    />
                </div>

                {/* ================== Card ===================== */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 2xl:gap-x-10 xl:gap-x-7 md:gap-x-5 lg:gap-y-0 gap-y-5 mt-8">
                    {/* =========== first ========== */}
                    <div className="bg-transparent border flex items-center xl:space-x-10 space-x-5 py-4 px-4 rounded-lg lg:shadow-xl shadow-sm">
                        {/* ================ Left Part ================== */}
                        <div className="bg-[#DBF3FF] py-2 px-2 rounded-full">
                            {/* ================ Icon ================== */}
                            <div className="py-1.5 px-1.5 bg-[#93DAFA] rounded-full">
                                <AiFillStar className="text-white text-xl"/>
                            </div>
                        </div>

                        {/* ================ Right Part ================== */}
                        <div className="space-y-2">
                            {/* ============= Text ================ */}
                            <p className="text-[#BEC4CE]"> 
                                Happy Custommer 
                            </p>
                            {/* ============= Number ================ */}
                            <h4 className="text-xl text-[#18181b] font-[500]"> 
                                600 
                            </h4>
                        </div>
                    </div>

                    {/* =========== second ========== */}
                    <div className="bg-transparent border flex items-center xl:space-x-10 space-x-5 py-4 px-4 rounded-lg lg:shadow-xl shadow-sm">
                        {/* ================ Left Part ================== */}
                        <div className="bg-[#F2C9C9] py-2 px-2 rounded-full">
                            <div className="py-1.5 px-1.5 bg-[#EF4444] rounded-full">
                                <GoCheck className="text-white text-xl"/>
                            </div>
                        </div>

                        {/* ================ Right Part ================== */}
                        <div className="space-y-2">
                            {/* ================ Text ================== */}
                            <p className="text-[#BEC4CE]"> 
                                Active Customer
                            </p>
                            {/* ================ Number ================== */}
                            <h4 className="text-xl text-[#18181b] font-[500]"> 
                                247
                            </h4>
                        </div>
                    </div>

                    {/* =========== third ========== */}
                    <div className="bg-transparent border flex items-center xl:space-x-10 space-x-5 py-4 px-4 rounded-lg lg:shadow-xl shadow-sm">
                        {/* ================ Left Part ================== */}
                        <div className="bg-[#D3F8E9] py-2 px-2 rounded-full">
                            {/* ================ Icon ================== */}
                            <div className="py-1.5 px-1.5 bg-[#6EE7B7] rounded-full">
                                <AiOutlineThunderbolt className="text-white text-xl"/>
                            </div>
                        </div>

                        {/* ================ Right Part ================== */}
                        <div className="space-y-2">
                            {/* ================ Text ================== */}
                            <p className="text-[#BEC4CE]"> 
                                Deals
                            </p>
                            {/* ================ Number ================== */}
                            <h4 className="text-xl text-[#18181b] font-[500]"> 
                                177
                            </h4>
                        </div>
                    </div>

                    {/* =========== fourth ========== */}
                    <div className="bg-transparent border flex items-center xl:space-x-10 space-x-5 py-4 px-4 rounded-lg lg:shadow-xl shadow-sm">
                        {/* ================ Left Part ================== */}
                        <div className="bg-[#DBF3FF] py-2 px-2 rounded-full">
                            {/* ================ Icon ================== */}
                            <div className="py-1.5 px-1.5 bg-[#93DAFA] rounded-full">
                                <FaListAlt className="text-white text-xl"/>
                            </div>
                        </div>

                        {/* ================ Right Part ================== */}
                        <div className="space-y-2">
                            {/* ================ Text ================== */}
                            <p className="text-[#BEC4CE]"> 
                                New Members
                            </p>
                            {/* ================ Number ================== */}
                            <h4 className="text-xl text-[#18181b] font-[500]"> 
                                130
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sales;