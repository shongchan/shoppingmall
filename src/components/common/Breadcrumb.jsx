import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Breadcrumb = ({ home, categoryValue, data }) => {
  
  Breadcrumb.propTypes = {
    home: PropTypes.string.isRequired,
    categoryValue: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  }

  console.log(home, categoryValue);

  return (
    <Container>
      {
        home ? home : categoryValue 
      }
      &nbsp;&nbsp;<Submark>{'>'}</Submark>&nbsp;&nbsp; {data}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: #c0c0c0;
`;

const Submark = styled.span`
  color: #7a7a7a;
  font-size: 12px;
`;

export default Breadcrumb;