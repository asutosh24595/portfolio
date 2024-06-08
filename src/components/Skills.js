import Card from "../utils/Card";
import { frontendSkills, backendSkills } from "../data";

export default function Skills() {
  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="text-slate-200 text-3xl mb-4">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="text-slate-200 text-lg">
          <p>Here are the skills I've developed over the past 2 years</p>
        </div>
      </div>
      <div className="flex justify-center gap-20 my-12 text-slate-200">
        <Card title="Frontend" skillsSet={frontendSkills} />
        <Card title="Backend" skillsSet={backendSkills}/>
      </div>
    </>
  );
}
