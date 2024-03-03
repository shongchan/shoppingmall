import styled from "@emotion/styled";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header, { ContentsContainer, ContentsWrap, MainContainer } from "../components/common/Header";
import PropTypes from "prop-types";
import { CommonButton } from "../components/ProductDetail";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reduceProduct, incrementProduct } from "../store/CartSlice"
import Modal from "../components/modal/CartModal";
import { useState } from "react";

const Cart = ({ category }) => {
  
  Cart.propTypes = {
    category: PropTypes.string.isRequired,
  }

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const productsPriceSum = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

  return (
    <MainContainer>
      {
        openModal ? <Modal closeModal={setOpenModal} /> : null
      }
      <Header />
      <ContentsWrap>
        <ContentsContainer>
          <Breadcrumb home={"홈"} data={category}/>
          
          {
            JSON.parse(localStorage.getItem('cart')).length === 0 ?
              (
              <EmptyContainer>
                <EmptyText>장바구니에 물품이 없습니다.</EmptyText>
                <Link to="/">
                  <CommonButton style={{ marginTop: "50px" }}>담으러 가기</CommonButton>
                </Link>
              </EmptyContainer>
              ) :

              (
              <CartItemsContainer>
                <ItemWrap>
                  {
                    products.map(item => {

                      const itemTotalPrice = item.price * item.quantity;

                      return (
                        <>
                        <ItemContainer>
                          <ItemImageContainer>
                          <ItemImage src={item.image} className="productImage" alt="상품 이미지"/>
                          </ItemImageContainer>
                          <ItemDescriptionContainer>
                            <ItemName>{item.title}</ItemName>
                            <ItemPriceContainer>
                                <ItemTotalPrice>{`($${Math.round(itemTotalPrice).toLocaleString('ko-KR')})`}</ItemTotalPrice>
                              <ItemPrice>{`($${Math.round(item.price).toLocaleString('ko-KR')})`}</ItemPrice>  
                            </ItemPriceContainer>
                            <QuantityContainer>
                                <MinusButton onClick={() => dispatch(reduceProduct(item))}>-</MinusButton>
                                <Quantity>{item.quantity}</Quantity>
                              <PlusButton onClick={() => dispatch(incrementProduct(item))}>+</PlusButton>
                            </QuantityContainer>
                          </ItemDescriptionContainer>
                          </ItemContainer>
                        </>

                      )
                    })
                  }
                </ItemWrap>

                <CalcContainer>
                  <CalcTotalPrice>{`총 : $(${Math.round(productsPriceSum).toLocaleString('ko-KR')})`}</CalcTotalPrice>
                    <PurchaseButton onClick={() => { setOpenModal(true) }}>구매하기</PurchaseButton>
                </CalcContainer>
                
              </CartItemsContainer>
            )
          }

          
          

        </ContentsContainer>
      </ContentsWrap>
      <Footer />
    </MainContainer>
  )
}

const EmptyContainer = styled.div`

`;

const EmptyText = styled.h2`
  margin-top: 60px;
  color: #c0c0c0;
  font-size: 26px;
  font-weight: 400;
`;

const CartItemsContainer = styled.div`
  display: flex;
  margin: 60px 0;
  
  @media (max-width: 1060px) {
    flex-direction: column;
  }
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  
  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const ItemImageContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

const ItemImage = styled.img`
  width: 224px;
  height: 100%;
  object-fit: contain;
`;

const ItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 20px;
  }

`;

const ItemName = styled.p`
  width: 700px;
  color: #c0c0c0;
  font-size: 20px;
`;

const ItemPriceContainer = styled.div`
  display: flex;
`;


const ItemPrice = styled.span`
  font-size: 30px;
  color: #c0c0c0;
`;

const ItemTotalPrice = styled(ItemPrice)`
  font-size:35px;
  margin-right: 5px;
`;

const QuantityContainer = styled.div`
  
`;

const MinusButton = styled(CommonButton)`
  border-radius: 10px 0 0 10px;
`;

const PlusButton = styled(CommonButton)`
  border-radius: 0 10px 10px 0;
`;

const Quantity = styled(CommonButton)`
  display: inline-block;
  height: 100%;
  color: #c0c0c0;
  padding: 0 20px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1)
  }
`;

const CalcContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 40px;
`;

const CalcTotalPrice = styled.div`
  color: #c0c0c0;
  font-size: 30px;
  margin: 0 20px;
`;

const PurchaseButton = styled(CommonButton)`
  margin-top: -10px;
`;



export default Cart;