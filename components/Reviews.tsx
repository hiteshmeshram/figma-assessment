import { Star, User } from "lucide-react";

const reviews = [
    {
      rating: 5.0,
      name: "Vedang Shah",
      comment: "He is very friendly and makes you comfortable first, then he give the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me."
    },
    {
      rating: 4.5,
      name: "Anonyms",
      comment: "His ability to create a relaxed atmosphere and provide insightful feedback made the hour-long session highly productive."
    },
    {
      rating: 5.0,
      name: "Hemet Singh",
      comment: "He is very friendly and makes you comfortable first, then he give the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me. His honest and actionable feedback on my technical abilities was invaluable"
    }
  ];
  
export const Reviews = () => {
    return <div className="mt-5 mb-20">
        <h1 className="text-xl">Reviews</h1>
        <p className="flex gap-2 items-center mt-2 text-neutral-400">3 Reviews | 5.0 <span><Star className="w-5 h-5"/></span></p>
        <div className="flex flex-col gap-4 mt-5">
            {reviews.map((reviews,index) => (
                <div key={index} className="flex flex-col gap-4 p-4 border border-neutral-200 rounded-2xl shadow-md">
                    <p className="flex gap-2 items-center">{reviews.rating}<span><Star className="w-5 h-5"/></span></p>
                    <p className="p-2 bg-slate-50 rounded-md">{reviews.comment}</p>
                    <h3 className="flex items-center text-neutral-400  gap-2"><span><User/></span>{reviews.name}</h3>
                </div>
            ))}
        </div>
    </div>
}