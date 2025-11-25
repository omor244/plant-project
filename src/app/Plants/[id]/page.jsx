"use client";

import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const Details =  () => {
    
    const { id } = useParams()
    const [plant, setplant] = useState({})
    const router = useRouter()

    useEffect(() => {
        axios(`http://localhost:3001/plants/${id}`)
            .then(res => {
                console.log(res.data)
                setplant(res.data)
        })
    }, [id])
    

    console.log('my plants', plant)

   

   

    return (
        <div className=" bg-base-300 pb-20 p-6 pt-10">
            <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-6">
                {/* Image */}
                <div className="flex justify-center items-center">
                    <Image
                        src={plant.image || "/placeholder.png"}
                        width={500}
                        height={500}
                        alt={plant.plantName}
                        className="rounded-2xl w-full h-[400px] object-cover object-contain  shadow-lg"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{plant.plantName}</h1>
                        <p className="text-gray-500 mt-2">{plant.category}</p>

                        <div className="flex items-center mt-4 space-x-4">
                            <span className="text-xl font-semibold text-green-600">${plant.price}</span>
                            <span className="flex items-center text-yellow-500">
                                ⭐ {plant.rating} / 5
                            </span>
                        </div>

                        <p className="mt-6 text-gray-700 leading-relaxed">{plant.description}</p>

                        <div className="mt-6">
                            <h2 className="font-semibold text-gray-800">Care Level:</h2>
                            <p className="text-gray-600">{plant.careLevel}</p>
                            <h2 className="font-semibold text-gray-800 mt-4">Available Stock:</h2>
                            <p className="text-gray-600">{plant.availableStock}</p>
                        </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                        
                        <button onClick={() => router.back()} className="px-6 py-3 border border-secondary text-green-600 font-semibold rounded-xl shadow hover:bg-green-50 transition">
                            Go Back
                        </button>
                    </div>
                </div>
            </div>

        
        </div>
    );
};

export default Details;