import { AlertCircleIcon } from "lucide-react"

export const Header = () => {
    return <div className="w-full p-5 flex justify-end">
        <div className="flex items-center gap-3">
            <AlertCircleIcon className="border border-neutral-200 p-2 w-10 h-10 rounded-md "/>
            <button className="border border-neutral-200 px-4 py-2">jimmy</button>
        </div>        
    </div>
}