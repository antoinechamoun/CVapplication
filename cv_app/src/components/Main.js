import styled from "styled-components";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";

const Main = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <PersonalInformation />
        <Experience />
        <button>Add new Experience</button>
        <Education />
      </InnerContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: silver;
  height: 100vh;
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
`;

export default Main;
