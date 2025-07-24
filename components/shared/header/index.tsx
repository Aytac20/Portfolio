import Link from "next/link";
import Menu from "./menu";
import { CodeXml } from "lucide-react";

const Header = () => {
  return (
    <header className=" sticky top-4 z-10 px-4 ">
      <div className="wrapper flex-between  rounded-full bg-[#4b4a46] max-h-[5rem] items-center">
        <div className="flex-start ">
          <Link href="/" className="flex-start">
            <CodeXml className="text-[#f3eadd]" />
          </Link>
        </div>
        <div className="space-x-2 ">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
