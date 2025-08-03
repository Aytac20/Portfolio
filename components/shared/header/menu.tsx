import {
  Binary,
  GraduationCap,
  Home,
  MenuIcon,
  Settings,
  SquareChartGantt,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-4 text-[#f3eadd] ">
        <nav className="md:flex hidden w-full gap-1">
          <Button
            asChild
            variant="ghost"
            className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl"
          >
            <Link href="/">
              <Home />
              Home
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl"
          >
            <Link href="#about">
              <UserIcon />
              About
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl"
          >
            <Link href="#skills">
              <Settings />
              Skills
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl"
          >
            <Link href="#education">
              <GraduationCap />
              Education
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl"
          >
            <Link href="#projects">
              <Binary />
              Projects
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl"
          >
            <Link
              href="/assets/Aytac_Balayeva_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareChartGantt />
              Resume
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden p-4 mt-4  ">
          <Sheet>
            <SheetTrigger className="flex items-center justify-center p-2">
              <MenuIcon className="h-[2.5rem] w-[2.5rem] text-[#f3eadd] pb-4 cursor-pointer hover:text-[#56c993] duration-300 ease-in-out " />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start  !bg-[#4b4a46] text-[#f3eadd]">
              <SheetTitle></SheetTitle>

              <Button
                asChild
                variant="ghost"
                className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl ml-[1rem]"
              >
                <Link href="#">
                  <Home />
                  Home
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl ml-[1rem]"
              >
                <Link href="#about">
                  <UserIcon />
                  About
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl ml-[1rem]"
              >
                <Link href="#skills">
                  <Settings />
                  Skills
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl ml-[1rem]"
              >
                <Link href="#education">
                  <GraduationCap />
                  Education
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl ml-[1rem]"
              >
                <Link href="#projects">
                  <Binary />
                  Projects
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-[#f3eadd] transition-all duration-300 ease-in-out rounded-all hover:text-[#4b4a46] hover:shadow-2xl ml-[1rem]"
              >
                <Link
                  href="/assets/Aytac_Balayeva_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareChartGantt />
                  Resume
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
