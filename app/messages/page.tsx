'use client'

import Sidebar from '@/components/messages/Sidebar';
import React, { useState } from 'react';
import Chat from '@/components/messages/Chat';
import { users as initialUsers } from '@/lib/users';
import { StaticImageData } from 'next/image';


interface User {
  id:Number,
  name:String,
  image:StaticImageData,
  message:String,
  time:String,
  status:Boolean
}

export default function MessagesPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  console.log(users)

  return (
      <div className='sticky top-[70px] left-[150px]'>
        <section className='relative  mx-4  rounded-md h-[80vh] bg-white overflow-hidden 2xl:max-w-2xl 2xl:mx-auto'>
        <h1 className='text-xl font-bold text-left my-3 ml-7'>
          Messages
        </h1>
        <div className='grid grid-cols-12 mx-4 h-[90%] absolute'>
          <div className='col-span-4 overflow-y-scroll mb-4'> 
            <Sidebar />
          </div>
          <div className='col-span-8 border border-gray-200 rounded-md mb-4'>
            <Chat />
          </div>
        </div>
      </section>
      </div>
  )
}
