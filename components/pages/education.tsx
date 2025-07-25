import * as React from "react";
import khazar from "@/images/khazar.png";
import texniki from "@/images/texniki.png";
import Image from "next/image";
import Link from "next/link";

const Education = () => {
  return (
    <div className="min-h-[100vh] wrapper py-10" id="education">
      <h1 className="text-4xl font-bold mb-12 text-[#4b4a46] text-center pt-[6rem]">
        Education
      </h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
        {/* Khazar University */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            2020 – 2025
          </time>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full hover:shadow-lg hover:scale-[1.02] duration-300">
            <Link href="https://international.khazar.org/" target="_blank">
              <Image
                src={khazar.src}
                alt="Khazar University Logo"
                className="w-full h-40 object-contain p-4"
                width={300}
                height={300}
              />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-gray-900">
                Khazar University
              </h3>
              <p className="text-gray-600 text-sm">
                Bachelor in Mathematics and Computer Science Education <br />
                Baku, Azerbaijan
              </p>
            </div>
          </div>
        </li>

        {/* Azerbaijan Technical University */}
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            2025 – 2027
          </time>
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full hover:shadow-lg hover:scale-[1.02] duration-300">
            <Link href="https://aztu.edu.az/en" target="_blank">
              <Image
                src={texniki.src}
                alt="Technical University Logo"
                className="w-full h-40 object-contain p-4"
                width={300}
                height={300}
              />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-gray-900">
                Azerbaijan Technical University
              </h3>
              <p className="text-gray-600 text-sm">
                Master in Management Information Systems <br />
                Baku, Azerbaijan
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Education;
