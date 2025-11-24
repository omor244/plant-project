

import { NextResponse } from 'next/server'
// import admin from '@/lib/firebaseAdmin';




// This function can be marked `async` if using `await` inside
export async function  proxy(request) {
      
    
    // const user = false
    // console.log('this is user', user)
 

    // if (!user) {

    //     return NextResponse.redirect(new URL('/', request.url))
    // }
    
    
    const token = request.cookies.get("fbToken")?.value;
 
  
    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // try {
    //     const decodedUser = await admin.auth().verifyIdToken(token);
    //     console.log("User:", decodedUser);
    //     // you may attach info to request if needed
    //     return NextResponse.next();
    // }
    
    // catch (err) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

 


    
 
   



}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        
        '/addProduct/:path*',
        '/ManageProducts/:path*',



    ],
}