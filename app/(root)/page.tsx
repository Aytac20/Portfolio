import About from "@/components/pages/about";
import Education from "@/components/pages/education";
import HomePage from "@/components/pages/home";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";

const MainPage = () => {
  return (
    <>
      <HomePage />
      <About />
      <Skills />
      <Education />
      <Projects />
    </>
  );
};

export default MainPage;
