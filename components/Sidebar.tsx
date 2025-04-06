'use client'
import { useState } from "react";


const sidebarItems = [
    "Dashboard",
    "Sessions",
    "Mentors",
    "Messages",
    "Payments",
    "Settings"
  ];

export const Sidebar = () => {
    const [selected,setSelected] = useState<number>(0)
    return <div className="w-[200px] pt-20 px-5 border border-r border-neutral-200 min-h-screen bg-slate-50">
        <ul className="">
            {sidebarItems.map((item,index) => (
                <li 
                    key={index}
                    onClick={() => setSelected(index)}
                    className={` px-4 py-2 mt-4 rounded-md ${selected === index ? 'bg-slate-300' : 'bg-slate-50'} `}>{item}</li>
            ))}
        </ul>

    </div>
}
