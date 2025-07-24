import * as React from "react";
import khazar from "@/images/khazar.png";
import texniki from "@/images/texniki.png";
import Image from "next/image";
import Link from "next/link";

const Education = () => {
  return (
    <div className="min-h-[100vh] wrapper py-10" id="education">
      <h1 className="text-4xl font-bold mb-8 text-[#4b4a46] text-center pt-[6rem]">
        Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Khazar University */}

        <div className="bg-white rounded-xl shadow-md overflow-hidden  mx-auto relative w-[30rem] hover:shadow-lg hover:scale-103 duration-300">
          <Link href="https://international.khazar.org/" target="_blank">
            <Image
              src={khazar.src}
              alt="Khazar University Logo"
              className="w-full h-40 object-contain p-4"
              height={300}
              width={300}
            />
          </Link>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Khazar University</h2>
            <p className="text-gray-600 text-sm">
              Bachelor in Mathematics and Computer Science Education <br />
              2020 – 2025 <br />
              Baku, Azerbaijan
            </p>
          </div>
        </div>

        {/* Azerbaijan Technical University */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-[30rem] mx-auto hover:shadow-lg hover:scale-103 duration-300">
          <Link href="https://aztu.edu.az/en" target="_blank">
            <Image
              src={texniki.src}
              alt="Technical University Logo"
              className="w-full h-40 object-contain p-4"
              height={300}
              width={300}
            />
          </Link>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              Azerbaijan Technical University
            </h2>
            <p className="text-gray-600 text-sm">
              Master in Management Information Systems <br />
              2025 – 2027 <br />
              Baku, Azerbaijan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
