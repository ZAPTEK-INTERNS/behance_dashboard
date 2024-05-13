import React from 'react'
import {users} from '../../lib/users'
import Image from 'next/image'
import { Select } from '@mantine/core';
import { GoDotFill } from "react-icons/go";

const Sidebar = () => {
  return (
   <section className='flex flex-col gap-y-6 mx-4'>

     <div className=''>
       <Select
         placeholder="Search..."
         data={['All', 'Online', 'Read', 'Unread']}
        />
     </div>

    <article className='border border-gray-200 rounded-md'>
       {
        users.map((user) => (
           <div key={user.name} className='flex gap-1 py-2 px-4 border-b border-gray-200 cursor-pointer hover:bg-blue-800 hover:text-white rounded-sm'>
            <div className='flex'>
               <Image 
                  src={user.image} 
                  width={50}
                  height={50} 
                  alt={`${user.name}`}
                  className='rounded-full object-fit'
               />
               <GoDotFill 
                 className={`text-blue-800 relative right-3 top-8 ${user.status === true ? "text-green-600": "text-yellow-500"}`}
               />
            </div>

             <div>
                <div className='flex justify-between items-center gap-3'>
                  <h3 className='font-bold'>{user.name}</h3>
                  <p className='text-sm'>{user.time}</p>
                </div>
                <p>{user.message.substring(0, 20)}...</p>
                
             </div>
           </div>
        ))
       }
    </article>
 </section>
  )
}

export default Sidebar