import { FiArrowRight } from "react-icons/fi";

const Shop = () => {
    return (
        <section className="container mx-auto sm:px-3 px-2 lg:mt-20 sm:mt-16 mt-14">
            <div>
                {/* ================ Title ================== */}
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold text-[#18181B]">
                    Buy<span className="text-[#FDCE74]">_</span>
                </h2>

                <div className="grid md:grid-cols-2 2xl:gap-x-20 xl:gap-x-14 md:gap-x-10 md:gap-y-0 gap-y-5 justify-items-center mt-8">
                    {/* ====================== Left Part ============================= */}
                    {/* ================ Image ================== */}
                    <img 
                        src="/images/shop-boy.png" 
                        alt="shopboy-image"
                        loading="lazy"
                        className="rounded-xl w-full my-auto"
                    />

                    {/* ====================== Right Part ============================= */}
                    <div className="my-auto xl:space-y-10 lg:space-y-7 space-y-5">
                        {/* ================ Title ================== */}
                        <h2 className="italic font-semibold text-[#18181b] lg:text-3xl text-2xl">
                            Select Your Item MOdel
                        </h2>

                        <div className="bg-transparent border-2 border-[#BFBFC3] lg:pl-1 pl-2 lg:pr-4 pr-2 lg:py-1 py-2 rounded-md flex items-center lg:space-x-5">
                            {/* ================ Left Part ================= */}
                            {/* ================ Image ================== */}
                            <img 
                                src="/images/shop-card.png" 
                                alt="shopboy-image"
                                loading="lazy"
                                className="rounded-md my-auto max-w-[6rem] lg:block hidden"
                            />

                            {/* =============== Right Part ==================== */}
                            <div className="space-y-1">
                                <div className="flex sm:flex-row flex-col justify-between sm:space-x-10">
                                    {/* ================ box Title ================== */}
                                    <h2 className="italic font-bold text-[#18181b] lg:text-xl text-lg">
                                        Topstone Carbon 4
                                    </h2>

                                    {/* ================ Price ================== */}
                                    <span className="text-sm text-[#18181B]">
                                        <span className="text-[#515458]"> From </span> $3.67
                                    </span>
                                </div>
                                {/* ================ Sub Text ================== */}
                                <p className="text-[#898F9A] text-sm">
                                    An unprecedented gravel shirt. Rare model fashion lokking-goodindie fashion. A good product indie fasion
                                </p>
                            </div>
                        </div>

                       <div className="lg:space-y-5 space-y-3">
                            {/* ================ Text ================== */}
                            <h2 className="italic font-semibold text-[#18181b] lg:text-3xl text-2xl">
                                Your Item Size
                            </h2>
                            {/* ================ Text ================== */}
                            <p className="text-[#898F9A]">
                                An unprecedented gravel shirt. Rare model fashion lokking-good indie fashion. A good product indie fasion. <span className="font-semibold text-[#18181B]"> Buy your model in purpus </span>
                            </p>
                            <div className="flex flex-wrap">
                                {/* =========== xs size ========== */}
                                <div className="py-2 px-3 border border-[#BEC4CE] rounded-lg font-[500] text-[#18181B] uppercase hover:text-[#bec4ce] lg:text-base text-sm sm:mr-5 mr-3 mt-2">
                                    XS
                                </div>
                                {/* =========== s size ========== */}
                                <div className="py-2 px-3.5 border border-[#BEC4CE] rounded-lg font-[500] text-[#18181B] uppercase hover:text-[#bec4ce] lg:text-base text-sm sm:mr-5 mr-3 mt-2">
                                    S
                                </div>
                                {/* =========== m size ========== */}
                                <div className="py-2 px-3.5 border border-[#BEC4CE] rounded-lg font-[500] text-[#18181B] uppercase hover:text-[#bec4ce] lg:text-base text-sm sm:mr-5 mr-3 mt-2">
                                    M
                                </div>
                                {/* =========== l size ========== */}
                                <div className="py-2 px-3.5 border border-[#BEC4CE] rounded-lg font-[500] text-[#18181B] uppercase hover:text-[#bec4ce] lg:text-base text-sm sm:mr-5 mr-3 mt-2">
                                    L
                                </div>
                                {/* =========== xl size ========== */}
                                <div className="py-2 px-3 border border-[#BEC4CE] rounded-lg font-[500] text-[#18181B] uppercase hover:text-[#bec4ce] lg:text-base text-sm sm:mr-5 mr-3 mt-2">
                                    XL
                                </div>
                            </div>
                       </div>

                        {/* ================ Button ================== */}
                       <button className="bg-[#E7E9EC] py-2 px-6 text-lg text-[#18181B] flex items-center hover:text-gray-500">
                            Next <FiArrowRight className="ml-1"/>
                       </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop;