import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';





function Github() {
    // const [data,setData] = useState({});
    // fetch("https://api.github.com/users/amitkumbhar05")
    // .then((res)=>res.json())
    // .then((res)=>setData(res))
    const data = useLoaderData()
  return (
    <div className='h-screen w-screen flex flex-wrap flex-col justify-center items-center'>
        <div className='bg-purple-700 flex flex-col flex-wrap justify-center items-center h-4/5 w-3/12  rounded-lg'>
            <img src={data.avatar_url} alt='profile_pic' className='h-1/2 p-4 rounded-full' w-20/>
            <div className="py-20 info text-center text-3xl text-white font-bold  ">Username : {data.login}</div>
        </div>
    </div>
  )
}

export default Github

export async function Firstload()
{
    const res = await fetch("https://api.github.com/users/amitkumbhar05")
    return res.json();
    
}
