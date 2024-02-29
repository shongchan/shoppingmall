import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ title, price, image, id }) => {
  return (
    <InnerContainer key={id}>
      <Link to={`product/${id}`}>
        <ProductImageContainer>
          <ProductImage src={image} className="productImage" alt="상품 이미지"/>
        </ProductImageContainer>
        <DescriptionContainer>
          <ProductName>{title}</ProductName>
          <ProductPrice>{`$${Math.round(price).toLocaleString('ko-KR')}`}</ProductPrice>
        </DescriptionContainer>
      </Link>
    </InnerContainer>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc((100% - 90px) / 4);

  &:hover img {
    transform: scale(1.3);
  }

  margin-bottom: 100px;

  @media (max-width: 1350px) {
    width: calc((100% - 30px) / 2);
  }

  @media (max-width: 787px) {
    width: 100%;
  }  
`;

const ProductImageContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  border-radius: 10px 10px 0 0;
  background-color: white;
`;

const ProductImage = styled.img`
  width: 140px;
  transition: 0.35s;
`

const DescriptionContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap: 20px;
  background-color: #264a99;
  padding: 20px;
  height: 170px;
`;

const ProductName = styled.p`
  word-wrap: break-word;
  color: #c0c0c0;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  color: #c0c0c0;
  font-size: 20px;
  font-weight: 600;
`;

export default ProductCard;