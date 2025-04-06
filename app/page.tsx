

import { MainScreen } from "@/components/MainScreen";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
   <div className="flex">
     <Sidebar/>
     <MainScreen/>
   </div>
  );
}
