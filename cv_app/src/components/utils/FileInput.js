import styled from "styled-components";

const Input = ({ id, type, onChange, value, placeHolder }) => {
  return (
    <Label>
      <b>Select a photo</b>
      <InputWrapper
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

const Label = styled.label`
  margin-bottom: 15px;
  display: block;
  width: 99%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: white;
  padding-top: 10px;
  cursor: pointer;
  padding-left: 5px;

  &:focus {
    border: 1px solid gray;
  }
`;

const InputWrapper = styled.input`
  display: none;
`;

export default Input;
