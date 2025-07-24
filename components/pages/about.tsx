import Link from "next/link";
const About = () => {
  return (
    <div
      className="grid min-h-[100vh] gap-8 items-center mt-10 wrapper"
      id="about"
    >
      <section className="flex flex-col gap-6 ">
        <div className="card">
          <div className="mac-header">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <span className="card-title">About Me</span>
          <p className="card-description">
            ey, I’m Aytac — a self-motivated web developer with a strong passion
            for building clean, user-friendly, and responsive web applications.
            I thrive on solving real-world problems through code and enjoy
            working across the full stack — from designing intuitive frontends
            to developing efficient, scalable backends. With a keen eye for
            detail and a focus on writing maintainable code, I constantly strive
            to improve both the user experience and the performance of the
            applications I build. Learning is a core part of my journey — I’m
            always exploring new technologies, frameworks, and best practices to
            stay up-to-date and grow as a developer. Whether I am collaborating
            with a team or working on personal projects, I bring enthusiasm,
            curiosity, and a desire to create meaningful digital experiences.
          </p>
          <div className=" bg-[#0d1117] grid grid-cols-2 px-4 py-4 text-[#f3eadd] rounded-lg text-[0.8rem]">
            <ul className="space-y-1">
              <li className="h-[3rem]">
                <strong>Name:</strong> Balayeva Aytac
              </li>
              <li className="h-[3rem]">
                <strong>Phone:</strong> +994 70 588 48 17
              </li>
              <li className="h-[3rem]">
                <strong>Experience:</strong> Personal Projects
              </li>
              <li className="h-[3rem]">
                <strong>Email:</strong> abalayeva12@gmail.com
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="h-[3rem]">
                <strong>Age:</strong> 22
              </li>
              <li className="h-[3rem]">
                <strong>Address:</strong> Baku, Azerbaijan
              </li>
              <li className="h-[3rem]">
                <strong>LinkedIn:</strong>{" "}
                <Link
                  href="https://www.linkedin.com/in/aytac-balayeva/"
                  className="underline text-[#4eb685]"
                  target="_blank"
                >
                  {" "}
                  https://www.linkedin.com/in/aytac-balayeva/
                </Link>
              </li>
              <li className="h-[3rem]">
                <strong>GitHub:</strong>{" "}
                <Link
                  href="https://github.com/Aytac20"
                  target="_blank"
                  className="underline text-[#4eb685]"
                >
                  {" "}
                  https://github.com/Aytac20
                </Link>
              </li>
            </ul>{" "}
          </div>
        </div>

        <a
          href="/assets/Aytac_Balayeva_Resume.pdf"
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
