'use client'

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"

const timeSlots = [
    "6:00 – 6:30PM", "7:00 – 7:30PM", "8:00 – 8:30PM",
    "9:00 – 9:30PM", "10:00 – 10:30PM", "11:00 – 11:30PM",
    "12:00 – 12:30PM", "1:00 – 1:30PM", "2:00 – 2:30PM", "3:00 – 3:30PM"
  ];
  
export const TimeComponent = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedTime,setSelectedTime] = useState<string>()

    return <div className="mt-5 p-5 flex grid grid-cols-2">
           
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <div className="grid grid-cols-2 p-10 gap-4">
                
            {timeSlots.map(slot => (
                <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`border rounded px-4 py-2 ${selectedTime === slot ? 'bg-blue-600 text-white' : 'bg-white'}`}
                >
                    {slot}
                </button>
                ))}
            </div>
            

       
    </div>
}