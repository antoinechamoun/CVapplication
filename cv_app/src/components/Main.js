import styled from "styled-components";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";
import CV from "./CV";

const Main = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState([
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      idx: new Date().getUTCMilliseconds(),
    },
  ]);
  const [education, setEducation] = useState([
    {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      idx: new Date().getUTCMilliseconds(),
    },
  ]);

  const addNewXp = () => {
    setExperience([
      ...experience,
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        idx: new Date().getUTCMilliseconds(),
      },
    ]);
  };

  const addNewEducation = () => {
    setEducation([
      ...education,
      {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        idx: new Date().getUTCMilliseconds(),
      },
    ]);
  };

  return (
    <MainContainer>
      <InnerContainer>
        <PersonalInformation
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          title={title}
          setTitle={setTitle}
          address={address}
          setAddress={setAddress}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          description={description}
          setDescription={setDescription}
        />
        {experience.map((xp, id) => {
          return (
            <Experience
              key={id}
              singleExperience={xp}
              allExperiences={experience}
              setExperience={setExperience}
            />
          );
        })}
        <Button onClick={addNewXp}>Add new Experience</Button>
        {education.map((edu, id) => {
          return (
            <Education
              key={id}
              singleEducation={edu}
              allEducation={education}
              setEducation={setEducation}
            />
          );
        })}
        <Button onClick={addNewEducation}>Add new Education</Button>
      </InnerContainer>
      <GeneratedCV>
        <CV
          firstName={firstName}
          lastName={lastName}
          title={title}
          address={address}
          phoneNumber={phoneNumber}
          email={email}
          description={description}
          experience={experience}
          education={education}
        />
      </GeneratedCV>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: silver;
  height: 100%;
  padding: 40px;
`;

const InnerContainer = styled.div`
  width: 700px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #d3d3d3;
  padding: 20px;
  margin-bottom: 20px;
`;

const GeneratedCV = styled.div`
  width: 740px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #d3d3d3;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: transparent;
  background-color: black;
  color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 5px;
  cursor: pointer;
`;

export default Main;
