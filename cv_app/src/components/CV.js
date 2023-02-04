import styled from "styled-components";

const CV = ({
  firstName,
  lastName,
  title,
  address,
  phoneNumber,
  email,
  description,
  image,
  experience,
  education,
}) => {
  return (
    <Container>
      <Head>
        <div>
          {firstName} {lastName}
        </div>
        <Title>{title}</Title>
      </Head>
      <Body>
        <MainInfo>
          <h3>Description</h3>
          <hr />
          {description}
          <h3>Experience</h3>
          <hr />
          {experience.map((xp, id) => {
            const { position, company, city, from, to } = xp;
            return (
              <Experience key={id}>
                <Left>
                  {from} - {to}
                </Left>
                <Right>
                  <div>
                    <b>{position}</b>
                  </div>
                  <div>
                    {company}, {city}
                  </div>
                </Right>
              </Experience>
            );
          })}

          <h3>Education</h3>
          <hr />
          {education.map((xp, id) => {
            const { universityName, degree, subject, city, from, to } = xp;
            return (
              <Education key={id}>
                <Left>
                  {from} - {to}
                </Left>
                <Right>
                  <div>
                    <b>{degree}</b>
                  </div>
                  <div>
                    {universityName}, {city}
                  </div>
                  <div>Subject: {subject}</div>
                </Right>
              </Education>
            );
          })}
        </MainInfo>
        <Info>
            <Image src={image} alt="not available"/>
            <h3>Personal Details</h3>
            <hr/>
            Address:
            <div style={{marginBottom: '10px'}}>{address}</div>
            Phone Number:
            <div style={{marginBottom: '10px'}}>{phoneNumber}</div>
            Email:
            <div style={{marginBottom: '10px'}}>{email}</div>
        </Info>
      </Body>
    </Container>
  );
};

const Image = styled.img`
  width:15vw;
  height:auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  height: 120px;
  background-color: #4169e1;
  font-weight: bold;
  font-size: 46px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;
const Title = styled.div`
  font-size: 22px;
  display: block;
`;
const Body = styled.div`
  display: flex;
`;
const MainInfo = styled.div`
  width: 60vw;
  height: min(80vh);
  background-color: white;
  padding: 20px;
`;

const Experience = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const Education = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 25vw;
  height: min(80vh);
  padding:10px;
`;

export default CV;
