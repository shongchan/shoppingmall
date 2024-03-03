import { Link, useParams } from "react-router-dom";
import Breadcrumb from "./common/Breadcrumb";
import Footer from "./common/Footer";
import Header, { ContentsContainer, ContentsWrap, MainContainer } from "./common/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdWithId } from "../store/ProductSlice";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { CategoryObj } from "../constants/category";
import { addToCart } from "../store/CartSlice";


const ProductDetail = () => {
  
  const { id } = useParams();
  
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProdWithId(id));
  //   console.log(title, image, price, description, rating);
  // }, [id]);
  
  const { shop } = useSelector((state) => state.data);
  const { title, image, price, description, category, rating } = shop[id-1];


  return (
    <MainContainer>
      <Header />
      <ContentsWrap style={{boxSizing: 'content'} }>
        <ContentsContainer>
          <Breadcrumb categoryValue={CategoryObj[category]} data={title} />
          <DetailWrap>
            <ProductImageContainer>
              <ProductImage src={image} className="productImage" alt="상품 이미지"/>
            </ProductImageContainer>
            <DescriptionContainer>
              <ProductNameContainer>
                <ProductName>{title}</ProductName><NewBadge>NEW</NewBadge>
              </ProductNameContainer>
              <ProductDescription>{description}</ProductDescription>
              <RatingContainer>
                <RatingStar>⭐⭐⭐⭐⭐</RatingStar> {/* TODO: 별점 표현 */} 
                <RatingText>{rating["rate"]} / {rating["count"]} 참여</RatingText>
              </RatingContainer>
              <ProductPrice>{`$${Math.round(price).toLocaleString('ko-KR')}$`}</ProductPrice>
              <ButtonsWrap>
                <CommonButton onClick={() => dispatch(addToCart({
                  id: id,
                  title: title,
                  description: description,
                  price: price,
                  category: category,
                  image: image,
                  quantity: 1
                }))}>장바구니에 담기</CommonButton>
                <Link to="/cart">
                  <MoveCartPage>장바구니로 이동</MoveCartPage>
                </Link>
              </ButtonsWrap>
            </DescriptionContainer>
          </DetailWrap>
        </ContentsContainer>
      </ContentsWrap>
      <Footer />
    </MainContainer>
  )
}

const DetailWrap = styled.div`
  display:flex;
  margin-top: 30px;

  @media (max-width: 1020px) {
    width: 90%;
    flex-direction: column;
    margin: 30px; auto;
  }
  
`;

const ProductImageContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 390px;
  padding: 50px;
  border-radius: 10px;
  background-color: white;
`;

const ProductImage = styled.img`
  width: 200px;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  padding: 40px 30px;

  @media (max-width: 1020px) {
    height: 400px;
  }
`;

const ProductNameContainer = styled.div`
  display:flex;
  align-items: center;
`;

const ProductName = styled.h2`
  color: #c0c0c0;
`;

const NewBadge = styled.span`
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 5px 10px;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  color: #fff;
  background-color: #1fb2a5;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  color: #c0c0c0;
  
`;

const RatingContainer = styled.div`
  display: flex;
`;

const RatingStar = styled.div`

`;

const RatingText = styled.span`
  margin-left: 20px;
  font-size: 18px;
  color: #c0c0c0;
`;

const ProductPrice = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: #c0c0c0;
`;

const ButtonsWrap = styled.div`
`;

export const CommonButton = styled.button`
  color: #fff;
  font-family: 'Pretendard-Regular';
  font-size: 16px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #661ae6;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background-color: #4c09bd;
  }
`

export const MoveCartPage = styled.button`
  color: #fff;
  font-family: 'Pretendard-Regular';
  font-size: 16px;
  margin-left: 20px;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;

  transition: background-color 0.35s;

  &:hover {
    color: #242424;
    border: 1px solid #9b9b9b;
    background-color: #9b9b9b;
  }
`;


export default ProductDetail;