import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HamburgerModal = ({ closeModal }) => {

  HamburgerModal.propTypes = {
    closeModal: PropTypes.string.isRequired,
  }

  return (
    <ModalBackground>
      <ModalMenuContainer>
        <MenuContainer>
          <Link to="/fashion" onClick={() => { closeModal(false) }}>
            <MenuItem>패션</MenuItem>
          </Link>
          <Link to="/accessory" onClick={() => { closeModal(false) }}>
            <MenuItem>액세서리</MenuItem>
          </Link>
          <Link to="/digital" onClick={() => { closeModal(false) }}>
            <MenuItem>디지털</MenuItem>
          </Link>
        </MenuContainer>
      </ModalMenuContainer>
      <ModalMargin onClick={() => { closeModal(false) }} />
    </ModalBackground>
  )
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const ModalMenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #13306f;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px;
`;

const ModalMargin = styled.div`
  flex: 1;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  cursor: pointer;
`;

const MenuContainer = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
  color: #fff;
  font-size: 18px;
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default HamburgerModal;