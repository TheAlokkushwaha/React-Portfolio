import Main from "@/components/homepage/main";
import AboutSection from "@/components/about/about";
import Experance from "@/components/experience/experince";
import Skills from "@/components/skills/skills";
import Education from "@/components/education/index";
import Projects from "@/components/projects/index";
import ContactSection from "@/components/contact/index";

export default async function Home() {

  return (
    <>
      <Main />
      <AboutSection />
      <Experance />
      <Skills />
      <Projects />
      <Education />  
      <ContactSection />
    </>

  );
}



