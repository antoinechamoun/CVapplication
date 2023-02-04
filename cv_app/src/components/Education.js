import styled from "styled-components";
import Input from "./utils/Input";

const Education = ({ singleEducation, allEducation, setEducation }) => {
  const { universityName, city, degree, subject, from, to, idx } = singleEducation;

  const handleChange = (e, field) => {
    const newEdu = allEducation.map((edu) => {
      if (edu.idx === idx) {
        switch (field) {
          case "universityName":
            edu = { ...edu, universityName: e.target.value };
            break;

            case "degree":
            edu = { ...edu, degree: e.target.value };
            break;

            case "city":
            edu = { ...edu, city: e.target.value };
            break;

            case "subject":
            edu = { ...edu, subject: e.target.value };
            break;

            case "from":
            edu = { ...edu, from: e.target.value };
            break;

            case "to":
            edu = { ...edu, to: e.target.value };
            break;

          default:
            break;
        }
        return edu;
      }
      return edu;
    });
    setEducation(newEdu);
  };

  const deleteEducation = () => {
    const newExp = allEducation.filter((xp) => xp.idx !== idx);
    setEducation(newExp);
  };

  return (
    <EducationWrapper>
      <h3>Education</h3>
      <Input
        type="text"
        placeHolder="University name"
        onChange={(e) => handleChange(e, "universityName")}
        value={universityName}
      />
      <Input
        type="text"
        placeHolder="Degree"
        onChange={(e) => handleChange(e, "degree")}
        value={degree}
      />
      <Input
        type="text"
        placeHolder="City"
        onChange={(e) => handleChange(e, "city")}
        value={city}
      />
      <Input
        type="text"
        placeHolder="Subject"
        onChange={(e) => handleChange(e, "subject")}
        value={subject}
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
      <Button onClick={deleteEducation}>Delete</Button>
    </EducationWrapper>
  );
};

const EducationWrapper = styled.div``;
const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: transparent;
  background-color: black;
  color:white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;
export default Education