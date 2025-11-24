'use client';
import Link from "next/link";
import useAuth from "../Hooks/useAuth";
import Image from "next/image";
import Cookies from "js-cookie";


const Navber = () => {

    const { signoutuser, user } = useAuth()

    

    const handelsignout = () => {
        signoutuser()
            .then( async (res) => {
                console.log('successfull  ', res)
                
                  const token = '';
                                Cookies.set("fbToken", token, { path: "/" });
                
                              
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className="navbar bg-base-100 shadow-sm px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={'/plants'}>Item 1</Link></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link href={'/'} className=" text-xl"><img className="max-w-52" src={"https://i.ibb.co.com/HfPhXZ3y/logo.png"} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/Plants'}>plants</Link></li>
                    <li><Link href={'/addProduct'}>Add Product</Link></li>
                    <li><Link href={'/ManageProducts'}>Manage Products</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/login'} className="btn outline-primary  outline-2 font-medium text-lg hover:text-white px-12 hover:bg-primary rounded-full mr-12">Login</Link>
                
                {
                    user ? <>
                        <div className="dropdown z-50 dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="w-12 h-12 rounded-full m-1"
                            >
                                <Image
                                    src={user?.photoURL || "/default-avatar.png"}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full"
                                    alt={user?.displayName || "User"}
                                />
                            </div>

                            <ul
                                tabIndex={-1}
                                className="dropdown-content font-semibold menu bg-white/40 text-white rounded-box z-10 w-52 p-2 shadow-sm"
                            >
                                <li className="bg-green-900 text-white">
                                    <a>{user.displayName}</a>
                                </li>
                                <li>
                                    <button className=" btn outline-2 bg-white/20 text-white font-medium text-lg outline-primary" onClick={handelsignout}>Sign Out</button>
                                </li>
                            </ul>
                        </div>
                    </> : ''
                }
            </div>
        </div>
    );
};

export default Navber;