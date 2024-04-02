import { Article } from "../../ui-kit/Article/Article";
import experienceData from "../../data/experience.json";
import { Columns } from "../../ui-kit/Columns/Columns";
import { Column } from "../../ui-kit/Columns/Column";

export const Experience = () => {
  return (
    <Article>
      <h2>Key Accomplishments</h2>
      <p>
        I feel that presenting the full resumé of someone with nearly 25 years
        of experience does not lead to a good user experience.
      </p>
      <p>Download Resumé</p>

      <Columns cols="2" gap="5">
        {experienceData.experience.map((exp, index) => (
          <Column key={index}>
            {exp.title && <h3>{exp.title}</h3>}
            {exp.employer && <p>{exp.employer}</p>}
            {exp.accomplishments && (
              <ul>
                {exp.accomplishments.map((accomplishment, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: accomplishment }}
                  ></li>
                ))}
              </ul>
            )}
          </Column>
        ))}
      </Columns>
    </Article>
  );
};
