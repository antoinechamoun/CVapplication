import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <h3>Antoine Chamoun</h3>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  top:100;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: gray;
`;

export default Footer;
