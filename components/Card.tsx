
interface CardProps {
    name: string,
    buttonName: string,
    content: string,
    serviceType: string,
    duration: string,
    amount: string
    imageDetail?: React.ReactNode
}
export const Card = ({name,buttonName,content, serviceType,duration,amount, imageDetail}: CardProps) => {
    return <div className="flex flex-col gap-5 p-6 border border-neutral-200 rounded-xl shadow-md">
        {imageDetail && imageDetail}
        <div className="flex justify-between">
            <h2 className="font-semibold text-xl ">{name}</h2>
            <button className="bg-black text-white px-2 py-1 rounded-md">{buttonName}</button>
        </div>
        <div>
            <p className="text-md text-neutral-600">{content}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 " >
            <div className="bg-blue-100 rounded-md p-4">
                <h1>service Type</h1>
                <p>{serviceType}</p>
            </div>
            <div className="bg-blue-100 rounded-md p-4">
                <h1>Duration</h1>
                <p>{duration}</p>
            </div>
            <div className="bg-blue-100 rounded-md p-4">
                <h1>Amount</h1>
                <p>{amount}</p>
            </div>

        </div>

    </div>
}