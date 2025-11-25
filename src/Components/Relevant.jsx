import Image from "next/image";


const Relevant = async () => {

    const categories = [
        { title: "Easy Care", desc: "Low-maintenance selections", icon: "🌿" },
        { title: "Pet Friendly", desc: "Safe for furry friends.", icon: "🐾" },
        { title: "Air Purifiers", desc: "Cleans up your home air", icon: "💨" },
    ];

    const plants = await fetch('http://localhost:3001/plants')
    const posts = await plants.json()
 
    console.log(posts)
   
       
 
    return (
        <div className="mt-[-150px] p-10 rounded-lg z-20 bg-white/90">
            <h2 className="text-5xl  font-bold text-secondary mb-5">Featured Categories</h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="border border-primary rounded-xl shadow-sm p-4 flex items-center gap-4 hover:bg-green-50 transition"
                    >
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className="mt-10">
                    <h2 className="text-5xl  text-secondary font-bold mb-5">Bestselling Plants</h2>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {posts.map((plant, i) => (
                            <div
                                key={i}
                                className="border border-primary  rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Plant Image */}
                                <div className="h-40 bg-gray-100 flex justify-center items-center">
                                    <img
                                        src={plant.image}
                                        alt={plant.plantName}
                                        className="h-full w-full object-cover object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h4 className="font-semibold">{plant.plantName}</h4>
                                    <p className="text-green-600 font-medium"> Price: ${plant.price}</p>
                                    <p className="text-green-600 font-medium"> Category: {plant.category}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Relevant;