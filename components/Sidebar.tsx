'use client'
import { Clock, Gift, MessageSquareWarning, SidebarClose, SidebarOpen, User } from "lucide-react";
import { useState } from "react";


const sidebarItems = [
    {
        name: "Mentor",
        icon: <User className="w-6 h-6"/>
    },
    {
        name: "Job",
        icon: <Gift className="w-6 h-6"/> 
    },
    {
        name: 'Booking',
        icon: <Clock className="w-6 h-6"/>
    },
    {
        name: "Priority DM",
        icon: <MessageSquareWarning />
    }
  ];

export const Sidebar = () => {
    const [selected,setSelected] = useState<number>(0)
    const [isOpen,setIsOpen] = useState(true);
    return <div className={` ${isOpen ? 'w-[200px]' : "w-[100px]"}  p-5 border border-r border-neutral-200 min-h-screen bg-slate-50 transition-all duration-300`}>
        <div className="flex justify-end">
            {isOpen ? <SidebarClose onClick={()=>setIsOpen(false)}/> : <SidebarOpen onClick={()=>setIsOpen(true)}/>}
        </div>
        <ul className="mt-10">
            {sidebarItems.map((item,index) => (
                <li 
                    key={index}
                    onClick={() => setSelected(index)}
                    className={` px-4 py-2 mt-4 rounded-md ${selected === index ? 'bg-slate-300' : 'bg-slate-50'} flex gap-2 items-center`}>{item.icon} {isOpen && item.name}</li>
            ))}
        </ul>

    </div>
}
