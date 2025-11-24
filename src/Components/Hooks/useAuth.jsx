'use clint'

import AuthContex from "@/Context/AuthContex";
import { useContext } from "react";



 const useAuth = () => {
    const context = useContext(AuthContex) // Use the context object you created


    return context;
};

export default useAuth