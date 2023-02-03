import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <h1>CV application</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: gray;
`;

export default Header;
