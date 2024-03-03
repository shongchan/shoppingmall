import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import HamburgerModal from "../modal/HamburgerModal";
import { useState } from "react";

const Header = () => {

  const products = useSelector((state) => state.cart.products);

  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      {
        openModal ? <HamburgerModal closeModal={setOpenModal} /> : null
      }
      <Nav>
        <HambergerMenu><RxHamburgerMenu onClick={() => { setOpenModal(true); console.log('test'); }} /></HambergerMenu>
        <Title><Link to="/">Shong&apos;s Shop</Link></Title>
        <NavMenu>
          <Link to="/fashion"><NavMenuCategory>패션</NavMenuCategory></Link>
          <Link to="/accessory"><NavMenuCategory>액세서리</NavMenuCategory></Link>
          <Link to="/digital"><NavMenuCategory>디지털</NavMenuCategory></Link>
        </NavMenu>
        <NavMenuSide>
          {/* <ModeChangeBtn type="checkbox"></ModeChangeBtn> */}
          <SearchInput type="input" placeholder="검색"></SearchInput> {/* TODO: 검색창 기능 구현*/}
          <CartBtn><Link to="/cart"><IoCartOutline /><CartNum>{products.length > 0 ? products.reduce((acc, cur) => acc + cur.quantity, 0) : 0}</CartNum></Link></CartBtn>
        </NavMenuSide>
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #0d275e;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1350px;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  background-color: #0d275e;

  @media (max-width: 1350px) {
    margin: 0 20px;
  }
`;

const HambergerMenu = styled.span`
  display: none;
  color: #fff;
  font-size: 30px;
  margin: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #315995;
  }

  &:active {
    transform: scale(95%);
  }

  @media (max-width: 787px) {
    display: flex;
    margin: 0 20px 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  color: #fff;
  margin-right: 20px;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavMenuCategory = styled.li`
  display: flex;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #315995;
  }

  &:active {
    transform: scale(95%);
  }

  @media (max-width: 787px) {
    display: none;
  }
`;

const NavMenuSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 30px;
`;

const ModeChangeBtn = styled.input`
`;

const SearchInput = styled.input`
  padding: 16px 30px;
  margin: 0 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Pretendard-Regular';
  color: #ebebeb;
  font-size: 16px;
  background-color: #6893d3;

  &::placeholder {
    color: inherit;
  }
`;

const CartBtn = styled.span`
  display: flex;
  position: relative;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background-color: #315995;
  }
`;

const CartNum = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 14px;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  
  background-color: red;
`;

export const MainContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`;

export const ContentsWrap = styled.section`
  display: flex;
  flex-grow: 1;
  background-color: #13306f;
`;

export const ContentsContainer = styled.div`
  width: 1350px;
  height:100%;
  min-height: 560px;
  margin: 0 auto;
  padding-top: 80px;
  background-color: #13306f;
`;

export default Header;