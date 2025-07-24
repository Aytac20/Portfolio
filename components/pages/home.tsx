import Image from "next/image";
import myphoto from "@/images/myphoto.png";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 wrapper text-[#4b4a46]  justify-center items-center">
      <section className="flex items-center justify-center w-full flex-col py-10">
        <div className="text-center lg:text-left px-4">
          <h1 className="text-4xl sm:text-5xl md:text-[3.8rem] leading-tight tracking-wider">
            <span>
              Hi! I am <br />
            </span>
            <span className="text-[#56c993] font-bold">Balayeva Aytac</span>,
            <br /> Web Developer
          </h1>
        </div>

        <div className="flex mt-6 gap-4 justify-center lg:justify-start w-full px-4 lg:ml-[4rem]">
          <Link
            href="https://www.linkedin.com/in/aytac-balayeva"
            target="_blank"
          >
            <button className="p-4 border-2 border-[#4b4a46] rounded-full hover:bg-[#4b4a46] hover:text-[#f3eadd] transition duration-200 cursor-pointer">
              <LinkedinIcon className="w-6 h-6" />
            </button>
          </Link>

          <Link href="https://github.com/Aytac20" target="_blank">
            <button className="p-4 border-2 border-[#4b4a46] rounded-full hover:bg-[#4b4a46] hover:text-[#f3eadd] transition duration-200 cursor-pointer">
              <GithubIcon className="w-6 h-6" />
            </button>
          </Link>

          <Link href="mailto:abalayeva12@gmail.com">
            <button className="p-4 border-2 border-[#4b4a46] rounded-full hover:bg-[#4b4a46] hover:text-[#f3eadd] transition duration-200 cursor-pointer">
              <Mail className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </section>

      <section className="flex items-center justify-center px-4 py-10">
        <Image
          src={myphoto}
          alt="Balayeva Aytac"
          width={300}
          height={300}
          className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] object-cover "
        />
      </section>
    </div>
  );
};

export default HomePage;
