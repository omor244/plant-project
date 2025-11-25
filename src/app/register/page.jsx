'use client';

import useAuth from "@/Components/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'
import Cookies from "js-cookie";
const Register = () => {
    const { createUser, googlelogin, updateuser } = useAuth()
    const router = useRouter()
  const loading = false
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleGoogleSignIn = async () => {

        googlelogin()
            .then(async (res) => {
                console.log(res.user)

                const token = await res.user.getIdToken();
                Cookies.set("fbToken", token, { path: "/", secure: true, sameSite: "Lax" });
                router.push('/')
                console.log('fb token ', token)
            })
            .catch(err => {
                console.log(err)
            })
      
    }

    const handleonSubmit =  (data ) => {
        console.log(data)
 
        createUser(data.email, data.password)
            .then( async (res) =>  {
                console.log(res.user)
                
                     
                const token = await res.user.getIdToken();
                Cookies.set("fbToken", token, { path: "/", secure: true, sameSite: "Lax" });
                router.push('/')
                
                updateuser({ displayName: data.name, photoURL: data.image })
                    
                    .then(async (res) => {
                        
                      

                    })
                    .catch(err => {
                        console.log(err)
                    })
                
            })
            .catch(err => {
            console.log(err)
        })
        

    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen bg-white'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to PlantNet</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleonSubmit)}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'

                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                    {...register('name', {
                                        required: true,
                                        maxLength: {
                                            value: 20,
                                            message: 'Your name is too longer '
                                        },
                                    })}
                                />
                                {
                                    errors.name && <p>{errors.name.message}</p>
                                }
                            
                            </div>
                            {/* Image */}
                            <div>
                                <label className="block text-sm mb-1">photoURL</label>
                                <input
                                    type="url"
                                  
                                    placeholder="photo URL"
                                
                                {...register('image', {
                                    required: false,
                                   
                                })} 
                                    
                                    className="input input-bordered w-full bg-white/20 text-black   "
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'

                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Enter a valid email'
                                        },

                                    })}
                                    id='email'

                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {
                                    errors.email && <p className='text-red-500'>{errors.email.message}</p>
                                }
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'


                                    {...register('password', {
                                        required: true,

                                    })}
                                    autoComplete='new-password'
                                    id='password'

                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                                />
                                {
                                    errors.password && <p>{errors.password.message}</p>
                                }
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-lime-500 w-full rounded-md py-3 text-white'
                            >
                                {loading ? (
                                    <TbFidgetSpinner className='animate-spin m-auto' />
                                ) : (
                                    'Continue'
                                )}
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div
                        onClick={handleGoogleSignIn}
                        className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                    >
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            href='/login'
                            className='hover:underline hover:text-lime-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;