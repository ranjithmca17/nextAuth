'use client'

import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
const router=useRouter()
  const logout=async()=>{
try{

  axios.get('/api/users/logout')

  toast.success("logout success fully")
  router.push('/login');
}catch(error){
  console.log(error.message);

  toast.error(error.message);
  
}
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p>profile page</p>
      <hr />
      <button onClick={logout} className='bg-black text-white p-2'>Logut</button>
    </div>
  )
}
