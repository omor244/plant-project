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
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((item, idx) => <tr key={idx}>
                                <th>{ idx + 1}</th>
                                <td>{ item.plantName}</td>
                                <td>{ item.category}</td>
                                <td className="flex  gap-4">
                                    <p onClick={() => router.push('/Plants')} className=" p-1 outline outline-primary rounded-full px-8 text-sm cursor-pointer">View</p>


                                    <p onClick={() => handeldelete(item._id)} className=" cursor-pointer p-1 outline outline-primary rounded-full px-8 text-sm">Delete</p>
                                </td>
                            </tr>
                            )
                        }
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;