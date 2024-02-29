import styled from "@emotion/styled";

const currYear = new Date().getFullYear();


const Footer = () => {
  return (
    <Container>
      <Link>
        <a rel="noreferrer noopener" className="link" href="https://zero-base.co.kr/" target="_blank">제로베이스</a>
      </Link>
        <Item>
          <li><CardItem src="/images/logos/logo_card_1.png" alt="Visa" title="Visa" className="cards-logo"/></li>
          <li><CardItem src="/images/logos/logo_card_2.png" alt="Mastercard" title="Mastercard" className="cards-logo"/></li>
          <li><CardItem src="/images/logos/logo_card_3.png" alt="American Express" title="American Express" className="cards-logo"/></li>
          <li><CardItem src="/images/logos/logo_card_4.png" alt="Paypal" title="Paypal" className="cards-logo"/></li>
          <li><CardItem src="/images/logos/logo_card_5.png" alt="Diners Club" title="Diners Club" className="cards-logo"/></li>
          <li><CardItem src="/images/logos/logo_card_6.png" alt="Discover" title="Discover" className="cards-logo"/></li>
      </Item>
      <Item>
        <SNSItem className="fa-brands fa-facebook-f icon-facebook" href="https://www.facebook.com" rel="noreferrer noopener" title="Facebook" target="_blank"></SNSItem>
        <SNSItem className="fa-brands fa-instagram icon-instagram" href="https://www.instagram.com" rel="noreferrer noopener" title="Instagram" target="_blank"></SNSItem>
        <SNSItem className="fa-brands fa-github icon-github" href="https://github.com" rel="noreferrer noopener" title="Github" target="_blank"></SNSItem>
      </Item>
      <Copyright>
        Copyright © {currYear} Zero Base
      </Copyright>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  gap: 25px;
  height: 250px;
  background-color: #0d275e;
`;

const Link = styled.div`
  color: #c0c0c0;
  font-weight: 600;
`;

const Item = styled.div`
  list-style: none;
  display: flex;
  gap: 10px;
`;

const CardItem = styled.img`
  width: 38px;
  height: 24px;
`;

const SNSItem = styled.a`
  margin: 0 10px;
  font-size: 22px;
`;

const Copyright = styled.div`
  color: #c0c0c0;
  font-size: 14px;
`;

export default Footer;