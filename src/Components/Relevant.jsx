import Image from "next/image";


const Relevant = () => {

    const categories = [
        { title: "Easy Care", desc: "Low-maintenance selections", icon: "🌿" },
        { title: "Pet Friendly", desc: "Safe for furry friends.", icon: "🐾" },
        { title: "Air Purifiers", desc: "Cleans up your home air", icon: "💨" },
    ];

    const plants = [
        {
            name: "Sansevieria",
            price: "$28",
            img: "/plants/plant1.png",
        },
        {
            name: "Sansevieria",
            price: "$28",
            img: "/plants/plant2.png",
        },
        {
            name: "Expert Advice",
            price: "Chat with our botanists",
            img: "/plants/expert.png",
        },
        {
            name: "Quality Guarantee",
            price: "Healthy plants guaranteed!",
            img: "/plants/quality.png",
        }

    ]
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

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        {plants.map((plant, i) => (
                            <div
                                key={i}
                                className="border border-primary rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Plant Image */}
                                <div className="h-40 bg-gray-100 flex justify-center items-center">
                                    <img
                                        src={plant.img}
                                        alt={plant.name}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h4 className="font-semibold">{plant.name}</h4>
                                    <p className="text-green-600 font-medium">{plant.price}</p>
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