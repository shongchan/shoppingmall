import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Category = ({ data }) => {

Category.propTypes = {
  data: PropTypes.string.isRequired,
}  

  return (
    <CategoryName>{data}</CategoryName>
  )
}

export const CategoryName = styled.div`
  margin: 30px 0 50px 0;
  color: #c0c0c0;
  font-size: 36px;
  font-weight: 600;
  text-align:center;
`;

export default Category;