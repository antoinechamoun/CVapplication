import styled from "styled-components";
import Input from "./utils/Input";

const Experience = ({ experience, setExperience }) => {
  const { position, company, city, from, to } = experience;

  const handleChange = (e, field) => {
    switch (field) {
      case "position":
        setExperience(e.target.value);
        break;

      default:
        break;
    }
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
      <Button>Delete</Button>
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div``;
const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: transparent;
  background-color: light-gray;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor:pointer;
`;
export default Experience;
