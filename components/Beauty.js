
const Beauty = () => {
    return (
        <section className="container mx-auto sm:px-3 px-2 lg:mt-20 sm:mt-16 mt-14">
            <div className="grid md:grid-cols-2 xl:gap-x-20 lg:gap-x-14 md:gap-x-10 md:gap-y-0 gap-y-5">
                {/* ======================== Left Part ============================ */}
                <div className="md:mt-24">
                    {/* ================== title ====================== */}
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold text-[#18181B]">
                        What Are Fashion Look Like For You<span className="text-[#FDCE74]">_</span>
                    </h2>

                    <div className="mt-8">
                        {/* ============= Image ============== */}
                        <img 
                            src="/images/boy2.png"
                            loading="lazy"
                            className="rounded-xl w-full"
                            alt="boy-image"
                        />

                        <p className="mt-5 italic text-[#18181b] sm:text-xl text-lg">
                            This is a good product for your are changing beauty when you try this shirt
                        </p>
                    </div>
                </div>

                {/* ======================== Right Part ============================ */}
                <div>
                    {/* ============= Image ============== */}
                    <img 
                        src="/images/boy.png"
                        loading="lazy"
                        className="rounded-xl w-full"
                        alt="boy-image"
                    />

                    {/* ============= Text ============== */}
                    <p className="mt-5 italic text-[#18181b] sm:text-xl text-lg">
                        This is a good product for your are changing beauty when you try this shirt
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Beauty;