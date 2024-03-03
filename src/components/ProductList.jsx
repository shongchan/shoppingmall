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
    {
      shop.length === 0 ? <Waiting> {"Loading.."} </Waiting> :
      (
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

`;

const Waiting = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 30px;
  color: #c0c0c0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export default ProductList;