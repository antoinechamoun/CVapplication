import styled from "styled-components";

const Input = ({ type, onChange, value, placeHolder }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};

const InputWrapper = styled.input`
  margin-bottom: 15px;
  display: block;
  width: 99%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;

  &:focus {
    border: 1px solid gray;
  }
`;

export default Input;
