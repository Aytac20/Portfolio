import Image from "next/image";

const About = () => {
  return (
    <div
      className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 wrapper text-[#4b4a46]  justify-center items-center mt-[2rem]"
      id="about"
    >
      <section className="flex w-full justify-center items-center mb-4">
        <Image
          src="/assets/realPhoto.png"
          alt="Balayeva Aytac"
          width={500}
          height={500}
          quality={100}
        />
      </section>

      <section className="flex flex-col gap-6 ">
        <h1 className="text-[2rem]">About Me</h1>
        <div className="flex flex-col text-justify gap-4">
          <p className="mb-2">
            I’m a web developer who loves turning ideas into clean, responsive,
            and user-friendly websites.{" "}
          </p>
          <p className="mb-2">
            I never planned to become a web developer. In fact, it all started
            unexpectedly during university. We had a web programming course, and
            the first time I worked with HTML and CSS, something just clicked.
            It was a small lesson—but it sparked something big in me. I became
            curious. I started building simple static websites using just HTML
            and CSS. Then I discovered JavaScript, and everything changed. I
            began watching tutorials, following online courses, and
            experimenting with small projects. The more I learned, the more I
            wanted to know.
          </p>
          <p className="mb-2">
            {" "}
            At first, I thought I’d focus only on frontend development. But then
            I asked myself—what if I could build the whole thing? That question
            pushed me to explore the backend, and soon I found myself diving
            into the MERN stack (MongoDB, Express.js, React, Node.js). I taught
            myself how to build full-stack applications, connect databases,
            manage user authentication, and think like a real developer.
          </p>
        </div>
        <a
          href="/assets/Aytac_Balayeva_CV.pdf"
          download="Aytac_Balayeva_CV.pdf"
          className="inline-block px-4 py-2 bg-[#56c993] text-white rounded hover:bg-[#4baa7e] transition duration-200 w-full sm:w-[10rem] text-center border-[#46a779] border"
        >
          Download CV
        </a>
      </section>
    </div>
  );
};

export default About;
