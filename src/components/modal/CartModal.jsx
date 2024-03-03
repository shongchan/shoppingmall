import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { CommonButton, MoveCartPage } from "../ProductDetail";
import { useDispatch } from "react-redux";
import { initiateCart } from "../../store/CartSlice";

const Modal = ({ closeModal }) => {

  Modal.propTypes = {
    closeModal: PropTypes.string.isRequired,
  }

  const dispatch = useDispatch();

  return (
    <ModalBackground>
      <ModalContainer>
        <Title>
          <TitleText>정말로 구매하시겠습니까?</TitleText>
        </Title>
        <Body>
          <BodyText>장바구니의 모든 상품들이 삭제됩니다.</BodyText>
        </Body>
        <Footer>
          <CancelBtn onClick={() => {
            closeModal(false);
            dispatch(initiateCart())
          }}>네</CancelBtn>
          <ConfirmBtn onClick={() => closeModal(false)} >아니오</ConfirmBtn>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  )
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: #13306f;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
`;

const Title = styled.div`
  margin-top: 10px;
`;

const TitleText = styled.h2`
  color: #c0c0c0;
  font-weight: 600;
`;

const Body = styled.div`

`;

const BodyText = styled.p`
  color: #c0c0c0;
  font-size: 18px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelBtn = styled(CommonButton)`

`;

const ConfirmBtn = styled(MoveCartPage)`
`;


export default Modal;