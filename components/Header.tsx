"use client"

import { ChangeEvent } from "react"
import Image from "next/image";
import { Input, Paper } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter} from "next/navigation"



export default function Header() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {    
    const params = new URLSearchParams(searchParams)

    if (event.target.value) {
        params.set("q", event.target.value)
    } else {
        params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }

    
  return (
    <header className="pt-5 flex justify-between items-center w-full mx-auto">
      <div>
        <Input
          size="sm"
          placeholder="Search for..."
          className="bg-white border-none shadow-md outline-none"
          leftSection={<FiSearch size={18} />}
          name="search"
          onChange={handleSearch}
        />
        <button type="submit" hidden>Submit</button>
      </div>
      <section className="flex gap-2 items-center">
        <div className="shadow-md cursor-pointer">
          <Paper shadow="xs" className="relative p-[10px]">
           <IoNotificationsOutline className="text-[#818891]" />
           <div className="w-1 h-1 bg-red-500 rounded-full absolute top-[14px] right-[14px]" />
          </Paper>
        </div>
        <div className="shadow-md cursor-pointer">
          <Paper shadow="xs" pr="sm" className="flex items-center py-1 pl-1">
           <Image
            src="/user.png"
            alt="user image"
            width={30}
            height={30}
            className="rounded-sm"
           />
           <div className="flex flex-col gap-0 ml-2">
            <p className="text-xs text-[#5F6979]">Ishmali Hassein</p>
            <p  className="text-[10px] text-[#818891]">Seller Account</p>
           </div>
          </Paper>
        </div>
      </section>
    </header>
  );
}
