"use client"

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Reviews } from "@/components/Reviews";
import { Sidebar } from "@/components/Sidebar";
import { Facebook, Instagram, Linkedin, Share, Twitter } from "lucide-react";
import { useState } from "react";

const profiles = [
    {
      name: "Jonny Rose",
      position: "Sr. Software Engineering at Google",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || Growth Management || Full Stack Developer",
      imageUrl: "https://www.w3schools.com/howto/img_avatar2.png" // Replace with actual image URL if available
    }]

    type buttons = {
        name: string,
        content: React.ReactNode
    }
    const buttons = [
        {
            name: "All",
            content: <div className="grid grid-cols-2 mt-10 gap-10">
                        <Card name="Career Guidance" buttonName="View Details" content="i'll give you advice to help with your career decisions. I'll give you advice to help with your career decisions" serviceType="1:1 call " duration="30 ind " amount="300 Rs" /> 
                        <Card name="Resume Review" buttonName="View Details" content={`2 x 1:1 call - career guidance <br></br> 1 x Prioriy Dm - Resume review..`}  serviceType="Priority DM " duration="in 1 day " amount="100 Rs" /> 
                        <Card name="1 month career guidance full confidence" buttonName="View Details"  content={`2 x 1:1 call - career guidance <br></br> 1 x Prioriy Dm - Resume review..`} serviceType="package " duration="1 month" amount="1000 Rs" />
                        <Card name="Interview tips and tricks advice" buttonName="View Details" content="practival strategies to boost your interview cofidence" serviceType="webinar " duration="on 28th oct " amount="200 Rs"  imageDetail={
                            <div className="flex flex-col gap-3 bg-neutral-900 px-5 py-15 rounded-xl">
                                <h1 className="text-xl text-green-500 ">Associate Data engineer in sql</h1>
                                <p className="text-white text-md">Gain practical knowleadge in Etl, sql and date warehouseing for data engineering</p>

                            </div>
                        } />
                        <Card name="Interview tips and tricks advice" buttonName="View Details" content="practival strategies to boost your interview cofidence" serviceType="webinar " duration="on 28th oct " amount="200 Rs" />
                    </div> 
        },
        {
            name: "1:1 call",
            content: <div className="grid grid-cols-2 mt-10">
                        <Card name="Career Guidance" buttonName="View Details" content="i'll give you advice to help with your career decisions. I'll give you advice to help with your career decisions" serviceType="1:1 call " duration="30 ind " amount="300 Rs" /> 
                    </div> 
        },
        {
            name: "Priority DM",
            content: <div className="grid grid-cols-2 mt-10">
                            <Card name="Resume Review" buttonName="View Details" content={`2 x 1:1 call - career guidance <br></br> 1 x Prioriy Dm - Resume review..`}  serviceType="Priority DM " duration="in 1 day " amount="100 Rs" /> 
                    </div> 
        },
        {
            name: "Package",
            content: <div className="grid grid-cols-2 mt-10">
                            <Card name="1 month career guidance full confidence" buttonName="View Details"  content={`2 x 1:1 call - career guidance <br></br> 1 x Prioriy Dm - Resume review..`} serviceType="package " duration="1 month" amount="1000 Rs" /> 
                    </div>
        },
        {
            name: "Webinar",
            content:  <div className="grid grid-cols-2 mt-10 gap-10">
                        <Card name="Interview tips and tricks advice" buttonName="View Details" content="practival strategies to boost your interview cofidence" serviceType="webinar " duration="on 28th oct " amount="200 Rs" /> 
                        <Card name="Dealing with stakeholder" buttonName="View Details" content="I'll tell you practical strategies to deal with your stake holder and how to cnoduct it smoothly" serviceType="webinar " duration="on 30 dec" amount="30 Rs" /> 
                    </div>
        },
        {
            name: "Digital Product",
            content: <div className="grid grid-cols-2 mt-10 gap-10">
                    <Card name="Interview tips and tricks advice" buttonName="View Details" content="practival strategies to boost your interview cofidence" serviceType="webinar " duration="on 28th oct " amount="200 Rs"  imageDetail={
                        <div className="flex flex-col gap-3 bg-neutral-900 px-5 py-15 rounded-xl">
                            <h1 className="text-xl text-green-500 ">Associate Data engineer in sql</h1>
                            <p className="text-white text-md">Gain practical knowleadge in Etl, sql and date warehouseing for data engineering</p>

                        </div>
                    } />

        </div> 
        }
    ]
    
export default function Profile() {
    const [selected,setSelected] = useState<number>(0)
    return <div className="flex">
        <Sidebar/>
        <div className="flex-1">
            <Header/>
            <div className="w-full border border-neutral-200 border-y">
                <div className="max-w-6xl mx-auto">
                    <div
                            className="flex gap-5 p-6  rounded-2xl">
                            <div className="min-w-60 bg-red-100 " >
                                <img className="w-full border rounded-2xl border-neutral-200 " src={profiles[0].imageUrl}/>
                               
                            </div>
                            <div className="flex flex-col gap-4 w-full p-2">
                                <div className="flex justify-between">
                                    <div className="">
                                            <h2 className="font-semibold text-2xl">{profiles[0].name}</h2>   
                                    </div>
                                    <div>
                                        <button className="bg-slate-400 text-white px-3 py-1 rounded-sm">20 sessions</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="">
                                            <h2 className="font-semibold text-xl text-neutral-500">{profiles[0].position}</h2>   
                                    </div>
                                    <div className="flex gap-2">
                                        
                                        <Linkedin/>
                                        <Instagram/>
                                        <Twitter/>
                                        <Facebook/>
                                        <Share/>
                                    </div>
                                </div>
                                
                                <div className="h-24 bg-slate-100 p-4 rounded-2xl text-slate-400">
                                    <p className=" text-md">{profiles[0].bio}</p>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
        <div className="max-w-6xl mx-auto mt-5">
            <h1 className="mb-5 text-2xl">Services</h1>
            <div className="bg-slate-200 rounded-md ">
                {buttons.map((b,index)=> (
                    <button 
                        key={index}
                        onClick={()=>setSelected(index)}
                        className={`rounded-xl px-5 py-1 text-sm m-2 ${selected === index ? "bg-white" : "bg-gray-200"}`}>{b.name}</button>
                ))}
            </div>
            <div>
                {buttons.map((button,index) => (
                    <div key={index}>
                        {selected === index  ? button.content: ""}
                    </div>
                ))}
            </div>
            
            <Reviews/>
        </div>
        </div>
    </div>
}