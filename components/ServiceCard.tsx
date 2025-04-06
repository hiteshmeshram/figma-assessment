import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { TimeComponent } from "./TimeComponent"


interface ServiceCardProps {
    title: string,
    subtitle: string,
    serviceType: string,
    duration: string,
    amount: string
}
export const ServiceCard = ({title, subtitle, serviceType, duration, amount}: ServiceCardProps) => {
    return (
        <div className="flex ">
            <Sidebar/>
            <div className="flex-1">
                <Header/>
                <div className="max-w-6xl w-6xl mx-auto mt-5">
                    <h1 className="text-xl font-semibold ">Jonny Rose</h1>
                    <div className="flex flex-col gap-4 border border-neutral-200 shadow-md rounded-xl p-6 mt-5">
                        <h1 className="text-xl font-semibold">{title}</h1>
                        <p>{subtitle}</p>
                        <div>
                            <p className="text-neutral-400">Assist you with</p>
                            <ol  className="bg-blue-50 p-4 rounded-md mt-2">
                                <li >i can help you figure out your next steps.</li>
                                <li>I can guid you through career transition and help you explore new fields.</li>
                                <li>Need advice on software engineerging roles? I'll help you navigate your options</li>
                            </ol>
                        </div>
                        <div className="grid grid-cols-3 gap-2 " >
                            <div className="bg-slate-50 rounded-md p-4">
                                <h1>service Type</h1>
                                <p>{serviceType}</p>
                            </div>
                            <div className="bg-slate-50 rounded-md p-4">
                                <h1>Duration</h1>
                                <p>{duration}</p>
                            </div>
                            <div className="bg-slate-50 rounded-md p-4">
                                <h1>Amount</h1>
                                <p>{amount}</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full">
                        <TimeComponent/>
                    </div>
                    <div className="w-full p-5">
                        <h2>Your Questions</h2>
                        <textarea className="w-full border border-neutral-200 mt-3 p-5"/>
                        <div className="flex justify-end">
                            <button className="text-white text-sm bg-black px-6 py-1 rounded-md mt-5">Next</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
  
}