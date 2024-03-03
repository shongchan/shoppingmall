import { useSelector } from "react-redux";
import Category from "../components/Category";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header, { ContentsContainer, ContentsWrap, MainContainer } from "../components/common/Header";
import ProductCard from "../components/ProductCard";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Fashion = ({category}) => {

  const { shop } = useSelector((state) => state.data);
  console.log(shop);

  Fashion.propTypes = {
    category: PropTypes.string.isRequired,
  }

  return (
    <MainContainer>
      <Header />
      <ContentsWrap>
        <ContentsContainer>
          <Breadcrumb home={"홈"} data={category} />
          <Category data={category}/>
          <Container>
            {
              shop
                .filter(v => v.category === "men's clothing" | v.category === "women's clothing")
                .map((item) => { 
                return (
                  <ProductCard id={item.id} title={item.title} price={item.price} image={item.image} key={item.id} />
                )
              })
            }
          </Container> 
        </ContentsContainer>
      </ContentsWrap>
      <Footer />
    </MainContainer>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
  flex-wrap: wrap;
  
  @media (max-width: 1350px) {
    width: 100%;
  }

`;

export default Fashion;