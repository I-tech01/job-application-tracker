import { Button } from "@/components/ui/button";
import { Briefcase, Ghost } from "lucide-react";
import Link from "next/link";
export default function Navbar() { return (
  <nav className="border-b border-gray-200 bg-white px-4 py-2 flex justify-between items-center">
    <div className="flex items-center h-16 mx-auto container px-4">
      {" "}
      <Link href={"/"} className="flex items-center gap-2 text-xl font-semibold text-primary">
        <Briefcase />
        Job Tracker
      </Link>
    </div>
    <div className="flex items-center gap-4 mx-2">
      <Link href={"/sign-in"} >
        {" "}
        <Button variant="ghost">Log in</Button>{" "}
      </Link>{" "}
      <Link href={"/sign-up"}>
        {" "}
        <Button>Sign up</Button>{" "}
      </Link>
    </div>
  </nav>);
}
