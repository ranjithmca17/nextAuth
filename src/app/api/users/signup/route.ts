// // import {connect from '@/dbConfig/dbConfig';
// // import connect from '@/dbConfig/dbConfig'
// import { Connect } from '@/dbConfig/dbConfig';
// // import User from '@/models/UserModel';

// import { NextRequest,NextResponse } from 'next/server';
// // const bcryptjs=require('bcryptjs');
// import bcryptjs from 'bcryptjs'
// // const User=require('@/models/UserModel')
// import UserVal from '@/models/UserModel';


// Connect();

// export async function POST(request:NextRequest){
//     try{
//         const reqBody=await request.json()
//         const {username,email,password}=reqBody;

//         console.log(reqBody);
//      //check if user already excist
//     const user= UserVal.findOne({email}); 
//     if(user){
//         return NextResponse.json({error:"User already Exists"},{status:400})
//     }  
//     //hash the password
//     const salt=await bcryptjs.genSalt(10)
//     const hashedPassword=await bcryptjs.hash(password,salt);

//     const newUser=new UserVal({
//         username,
//         email,
//         password:hashedPassword
//     })

//     const saveUser=await newUser.save()
//     console.log(saveUser);

//     return NextResponse.json({
//         message:'User created Successfully',
//         success:true,
//         saveUser
//      } )
    

//     }catch(error){
//         return NextResponse.json({error},
//             {status:500})
//     }
// }



import { Connect } from "@/dbConfig/dbConfig";
import UserVal from "@/models/UserModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
// import { error } from "console";


Connect();

export async function POST(request:NextRequest){
    try{
      
        const reqBody=await request.json();
        const {username,email,password}=reqBody
        console.log(reqBody);

        //check user already exsit
        const user=await UserVal.findOne({email});

        if(user){
            return NextResponse.json({error:"user already exist"},{status:400});
        }

        //hash password
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt)

       const newUser = new UserVal({
            username,
            password:hashedPassword,
            email
            
        })
       const saveUser= await newUser.save();
       console.log(saveUser);
       
       return NextResponse.json({
        message:'user created successfully',
        success:true,
        saveUser
       })


        
    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}