import {  BellMinus } from "lucide-react"

export const Header = () => {
    return <div className="w-full p-5 flex justify-end border-b border-neutral-300">
        <div className="flex items-center gap-3">
            <BellMinus className="border border-neutral-200  p-1 shadow-xl rounded-md" size={'30'} />
            {/* <button className="border border-neutral-200 px-4 py-2">jimmy</button> */}
            <select className="border border-neutral-200 px-4 py-1 rounded-md shadow-xl">
                <option className="border border-neutral-200">Jimmy</option>
            </select>
        </div>        
    </div>
}