import styled from "styled-components";
import Input from "./utils/Input";

const Experience = ({ singleExperience, allExperiences, setExperience }) => {
  const { position, company, city, from, to, idx } = singleExperience;

  const handleChange = (e, field) => {
    const newExp = allExperiences.map((xp) => {
      if (xp.idx === idx) {
        switch (field) {
          case "position":
            xp = { ...xp, position: e.target.value };
            break;

          case "company":
            xp = { ...xp, company: e.target.value };
            break;

          case "city":
            xp = { ...xp, city: e.target.value };
            break;

          case "from":
            xp = { ...xp, from: e.target.value };
            break;

          case "to":
            xp = { ...xp, to: e.target.value };
            break;

          default:
            break;
        }
        return xp;
      }
      return xp;
    });
    setExperience(newExp);
  };

  const deleteExperience = () => {
    const newExp = allExperiences.filter((xp) => xp.idx !== idx);
    setExperience(newExp);
  };

  return (
    <ExperienceWrapper>
      <h3>Experience</h3>
      <Input
        type="text"
        placeHolder="Position"
        onChange={(e) => handleChange(e, "position")}
        value={position}
      />
      <Input
        type="text"
        placeHolder="Company"
        onChange={(e) => handleChange(e, "company")}
        value={company}
      />
      <Input
        type="text"
        placeHolder="City"
        onChange={(e) => handleChange(e, "city")}
        value={city}
      />
      <Input
        type="text"
        placeHolder="From"
        onChange={(e) => handleChange(e, "from")}
        value={from}
      />
      <Input
        type="text"
        placeHolder="To"
        onChange={(e) => handleChange(e, "to")}
        value={to}
      />
      <Button onClick={deleteExperience}>Delete</Button>
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div``;
const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: transparent;
  background-color: black;
  color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;
export default Experience;
