import styled from "styled-components";
import Input from "./utils/Input";
import FileInput from "./utils/FileInput";

const PersonalInformation = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  title,
  setTitle,
  address,
  setAddress,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  description,
  setDescription,
  image,
  setImage,
}) => {
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

      case "address":
        setAddress(e.target.value);
        break;

      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;

      case "image":
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "description":
        setDescription(e.target.value);
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
      <FileInput
        id="file"
        onChange={(e) => handleChange(e, "image")}
        type="file"
      />
      <Input
        type="text"
        placeHolder="Address"
        onChange={(e) => handleChange(e, "address")}
        value={address}
      />
      <Input
        type="number"
        placeHolder="Phone Number"
        onChange={(e) => handleChange(e, "phoneNumber")}
        value={phoneNumber}
      />
      <Input
        type="email"
        placeHolder="Email"
        onChange={(e) => handleChange(e, "email")}
        value={email}
      />
      <Input
        type="text"
        placeHolder="Description"
        onChange={(e) => handleChange(e, "description")}
        value={description}
      />
    </PersonalContainer>
  );
};

const PersonalContainer = styled.div``;

export default PersonalInformation;
