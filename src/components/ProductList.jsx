import styled from "@emotion/styled";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/ProductSlice";
import { CategoryName } from "./Category";

const ProductList = () => {
  const dispatch = useDispatch();
  const { shop } = useSelector((state) => state.data);
  console.log(shop);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  
  return (
    <>
    
    <CategoryName>패션</CategoryName>
    <Container>
      {
          shop.map((item, idx) => {
            if (idx >= 0 && idx <= 3) {
              return (
                <ProductCard id={item.id} title={item.title} price={item.price} image={item.image} key={item.id} />
              )
          }
        })
      }
      </Container>

    <CategoryName>액세서리</CategoryName>
    <Container>
      {
          shop.map((item, idx) => {
            if (idx >= 4 && idx <= 7) {
              return (
                <ProductCard id={item.id} title={item.title} price={item.price} image={item.image} key={item.id} />
              )
          }
        })
      }
      </Container>

    <CategoryName>디지털</CategoryName>
    <Container>
      {
          shop.map((item, idx) => {
            if (idx >= 8 && idx <= 11) {
              return (
                <ProductCard id={item.id} title={item.title} price={item.price} image={item.image} key={item.id} />
              )
          }
        })
      }
      </Container>  
  </>
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

  border: 1px solid yellow;
`;

export default ProductList;