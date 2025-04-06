"use client"

import { useState } from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { useRouter } from "next/navigation";


const profiles = [
    {
      name: "Jonny Rose",
      position: "Sr. Software Engineering at Google",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || Growth Management || Full Stack Developer",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9H4ynxXyiE0QrkNzHEwdNW5fvLJUypFsew&s" // Replace with actual image URL if available
    },
    {
      name: "Dev Jain",
      position: "Sr. Software Engineering at Microsoft",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer(MERN)",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6LJ6NpMvz2PtYc5F7EGD-tcI9S59VHizXQ&s"
    },
    {
      name: "Rishi Mehta",
      position: "Sr. Software Engineering at JP Morgan",
      bio: "Prev Application Engineer @Google",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6LJ6NpMvz2PtYc5F7EGD-tcI9S59VHizXQ&s"
    },
    {
      name: "Heet Mistry",
      position: "Sr. Software Engineering at Zomato",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6LJ6NpMvz2PtYc5F7EGD-tcI9S59VHizXQ&s"
    }
  ];

  const selectBoxes = [
    {
        name: "Role"
    },
    {
        name: "Company"
    },
    {
        name: "Slot"
    },
    {
        name: "Rating"
    }
  ]

  const roles = ["SE/SDE", "D/AI/Ml", "Product Management", "Project Management", "Consulting", "Quantitative Finance"]
  const suggestions = ["Google", "Amazon" ,"Microsofy", " Slack"]
export const MainScreen = () => {
    const [search ,setSearch] = useState<string | null>(null)
    const router = useRouter()

    return <div className="flex-1">
        <Header/>
        <SubHeader/>
       <div className="max-w-6xl flex flex-col mx-auto p-6 gap-5">
            <div className="grid grid-cols-2 w-full px-6 gap-20 my-2">
                <div className="mr-10 w-full">
                    <input 
                        onChange={(e) => {()=>setSearch(e.target.value)}}
                        className="relative py-2 px-6  rounded-md  bg-gray-100 w-full " placeholder="Search by name"></input>
                    {search && <div className=" h-40 bg-white absolute border border-neutral-200 rounded-md mt-4 w-[500px] p-4">
                        <h1>Trending searches</h1>
                        {suggestions.map((s,index) => <h3 key={index} className="text-neutral-500 mt-1">{s}</h3>)}
                    </div>}
                </div>
                <div className="flex gap-5 w-full justify-between">
                    {selectBoxes.map((s) => (
                        <>
                            <select className="relative border border-neutral-300 px-4 py-2 rounded-md text-md ">
                                <option className="relative ">{s.name}</option>
                            </select>
                            {/* <div className="absolute w-40 h-60 border border-neutral-200 bg-white mt-12  p-4">
                                <ul>
                                {roles.map((r)=> <li>{r}</li>)}
                                </ul>
                            </div> */}
                        </>
                    ))}
                </div>
            </div>
            {profiles.map((profile,index) => (
                <div onClick={()=>router.push('/profile')} 
                    key={index} 
                    className="flex gap-5 border border-neutral-200 p-6  rounded-2xl">
                    <div className="min-w-60 bg-red-100 " >
                        <img className="w-full border rounded-2xl border-neutral-200 " src={profile.imageUrl}/>
                    </div>
                    <div className="flex flex-col gap-4 w-full p-2">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h2 className="font-semibold text-2xl">{profile.name}</h2></div>
                                <div>
                                    <h3 className="font-medium text-xl text-neutral-500">{profile.position}</h3>
                                </div>
                            </div>
                            <div>
                                <button className="bg-black text-white px-3 py-1 rounded-md">view profile</button>
                            </div>
                        </div>
                        <div className="h-24 bg-slate-100 p-4 rounded-2xl text-slate-400">
                            <p className=" text-md">{profile.bio}</p>
                        </div>
                    </div>
                </div>
            ))}
       </div>
    </div>
}