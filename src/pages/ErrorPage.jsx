import styled from "@emotion/styled";
import Footer from "../components/common/Footer";
import Header, { ContentsContainer, ContentsWrap, MainContainer } from "../components/common/Header";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <MainContainer>
      <Header />
      <ContentsWrap>
        <ContentsContainer>
          <Error>404</Error>
          <Description>페이지를 찾을 수 없습니다.</Description>
          <Link to="/"><CommonBtn>메인으로</CommonBtn></Link>
        </ContentsContainer>
      </ContentsWrap>
      <Footer />
    </MainContainer>
  )
}

const Error = styled.p`
  margin: 60px 0 10px 0;
  text-align: center;
  font-size: 140px;
  font-weight: 600;
  color: #c0c0c0
`;

const Description = styled.p`
  color: #c0c0c0;
  font-size: 30px;
  text-align:center;
`;

const CommonBtn = styled.button`
  display: block;
  margin: 40px auto;
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border: none;
  background-color: #0016ff;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background-color: #0013e0;
  }
`;

export default ErrorPage;