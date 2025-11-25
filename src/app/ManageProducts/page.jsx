"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ManageProducts =  () => {
   
    const [posts, setpost] = useState([])
    
    const router = useRouter()
   

    
    
    useEffect(() => {

        axios('https://nextjs-server-six.vercel.app/allplants')
            .then(res => {
                setpost(res.data)
                console.log(res.data)
        })
    },[])
 

  

    const handeldelete = (id) => {
        console.log(id)

        axios.delete('https://nextjs-server-six.vercel.app/plants', { data: { id } })
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount) {
                    const remainning = [...posts].filter(i => i._id !== id)
                    setpost(remainning)

                    console.log('after delet',remainning)
                }
        })
    }
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Manage Products ({posts.length})</h2>
            <div className="overflow-x-auto border rounded-lg shadow-lg">
                <table className="table min-w-full table-zebra">

                    {/* Table Head: Visible on all devices */}
                    <thead>
                        <tr>
                            <th className="hidden sm:table-cell">#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {
                            posts.map((item, idx) => (
                                <tr key={item._id || idx} className="border-b">
                                    {/* 1. Index Column: Hidden on small mobile screens */}
                                    <th className="hidden sm:table-cell">{idx + 1}</th>

                                    {/* 2. Name Column */}
                                    <td className="font-semibold text-gray-800">{item.plantName}</td>

                                    {/* 3. Category Column */}
                                    <td className="text-gray-600">{item.category}</td>

                                    {/* 4. Actions Column: Responsive adjustments */}
                                    <td className="p-2">
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">

                                            {/* View Button */}
                                            <button
                                                onClick={() => router.push(`/plants/${item.plantId}`)}
                                                className="w-full sm:w-auto p-1 text-sm rounded-full  outline-primary px-8 outline"
                                            >
                                                View
                                            </button>

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handeldelete(item._id)}
                                                className="w-full sm:w-auto p-1 text-sm rounded-full outline outline-primary px-8  hover:bg-red-50 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* Fallback for when posts is empty or loading */}
                {posts.length === 0 && (
                    <div className="p-4 text-center text-gray-500">
                        {/* You can add a loading spinner here */}
                        No products found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageProducts;