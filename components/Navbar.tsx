import React from 'react'
import {File, Sun} from 'lucide-react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const Navbar = () => {
    return (
        <div className=" shadow-lg p-4 flex justify-between items-center px-12">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 text-gray-400">
                <File />
                <Sun />
               <div className="flex justify-between items-center gap-2">
                   <Avatar className="border-1 border-gray-200 ">
                       <AvatarImage src="" className="" />
                       <AvatarFallback className="bg-blue-400 text-white tracking-normal font-base">JD</AvatarFallback>
                   </Avatar>
                   <h2 className="text-lg">John Doe</h2>
               </div>
            </div>
        </div>
    )
}
export default Navbar
