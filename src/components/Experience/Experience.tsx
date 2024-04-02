import { Article } from "../../ui-kit/Article/Article";
import experienceData from "../../data/experience.json";

export const Experience = () => {
  return (
    <Article>
      <h2>Key Accomplishments</h2>
      <p>
        I feel that presenting the full resumé of someone with nearly 25 years
        of experience does not lead to a good user experience.
      </p>
      <p>Download Resumé</p>

      {experienceData.experience.map((exp, index) => (
        <div key={index} className="mt-4">
          <h3>{exp.title}</h3>
          <p>{exp.employer}</p>
          <ul>
            {exp.accomplishments.map((accomplishment, idx) => (
              <li key={idx}>{accomplishment}</li>
            ))}
          </ul>
        </div>
      ))}
    </Article>
  );
};
