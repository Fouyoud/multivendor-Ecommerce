import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
   <div className="p-5">
      <div className="w-100 flex justify-end">
          <ThemeToggle/>
      </div>
        <div>
          <h1 className="fon-bold text-blue-500 font-barlow">Welcome into Next.js</h1>
       </div>
         <Button>Click here</Button>
   </div>
  );
}
