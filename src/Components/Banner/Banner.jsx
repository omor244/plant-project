




const Banner = () => {

    return (
       
            <section className="relative w-full min-h-[600px]   overflow-hidden">

                {/* --- 1. IMAGE BACKGROUND LAYER --- */}
                <div
                    className="absolute inset-0 bg-cover w-full bg-center transition-opacity duration-700"
                    style={{ backgroundImage: `url('https://i.ibb.co.com/QyCkVbm/banner.webp')` }}
                    aria-hidden="true"
                >
                    {/* --- Dark Overlay (For text readability) --- */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* --- 2. CONTENT LAYER (Headline, Subtitle, CTA) --- */}
                <div className="relative z-10 w-full h-full flex flex-col pt-42 justify-center items-center text-white p-6">

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center leading-tight">
                        Bring Nature Home
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl text-center font-light">
                        Discover the joy of indoor gardening with our easy-care plants!
                    </p>

                    {/* Primary CTA Button */}
                   
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transition duration-300">
                            Shop Plants Now
                        </button>
                    

                </div>
            </section>
       
    );
};

export default Banner;