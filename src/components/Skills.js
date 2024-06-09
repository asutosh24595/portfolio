import Card from "../utils/Card";
import { frontendSkills, backendSkills } from "../data";

export default function Skills() {
  return (
    <>
        <div className="text-slate-200 text-3xl  pt-20 mb-10 text-center">
          <h1>Skills</h1>
        </div>
        <div className="text-slate-200 md:text-lg px-1.5 text-center">
          <p>Here are the skills I've developed over the past 2 years</p>
      </div>
      <div className="my-12 text-slate-200 lgl:flex justify-center lgl:gap-12">
        <Card title="Frontend" skillsSet={frontendSkills} />
        <Card title="Backend" skillsSet={backendSkills}/>
      </div>
    </>
  );
}
