import { useState } from "react";
import styled from "styled-components";
import Input from "./utils/Input";
import FileInput from "./utils/FileInput";

const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (e, field) => {
    switch (field) {
      case "firstName":
        setFirstName(e.target.value);
        break;

      case "lastName":
        setLastName(e.target.value);
        break;

      case "title":
        setTitle(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <PersonalContainer>
      <h3>Personal information</h3>
      <Input
        type="text"
        placeHolder="First Name"
        onChange={(e) => handleChange(e, "firstName")}
        value={firstName}
      />
      <Input
        type="text"
        placeHolder="Last Name"
        onChange={(e) => handleChange(e, "lastName")}
        value={lastName}
      />
      <Input
        type="text"
        placeHolder="Title"
        onChange={(e) => handleChange(e, "title")}
        value={title}
      />
      <FileInput id="file" type="file" />
    </PersonalContainer>
  );
};

const PersonalContainer = styled.div``;

export default PersonalInformation;
