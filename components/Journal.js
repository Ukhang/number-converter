
const Journal = () => {
    return (
        <section className="container mx-auto sm:px-3 px-2 lg:my-20 sm:my-16 my-14">
            <div>
                {/* ============ title =============== */}
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold text-[#18181B] text-center">
                    Journels<span className="text-[#FDCE74]">_</span>
                </h2>

                {/* ============ Image ================ */}
                <div className="flex justify-center w-full mt-8">
                    <img 
                        src="/images/journal.png" 
                        loading="lazy"
                        alt="journal-image"
                        className="w-full rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default Journal;