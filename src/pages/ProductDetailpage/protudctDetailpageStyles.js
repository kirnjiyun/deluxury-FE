import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  min-width: 0;
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailsContainer = styled.div`
  flex: 1;
  padding-left: 20px;
  min-width: 0;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  flex: 1 1 200px;
  min-width: 0;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const Category = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
`;

export const BrandName = styled.h3`
    font-size: 18px;
    margin: 0;
    font-weight: bold;
`;

export const CategoryPath = styled.p`
    font-size: 14px;
    margin: 5px 0 0 0;
`;

export const HeartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 48px;
  color: ${(props) => (props.isLiked ? "black" : "lightgray")};
  padding: 8px;
  min-width: 48px;
  min-height: 48px;
  &:focus {
    outline: none;
  }
  @media (max-width: 480px) {
    font-size: 36px;
    min-width: 44px;
    min-height: 44px;
  }
`;

export const Brand = styled.h2`
    font-size: 20px;
    margin: 10px 0;
`;

export const Description = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0;
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const Color = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const SKU = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-size: 16px;
    margin-right: 10px;
`;

export const Select = styled.select`
    padding: 5px;
    font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 480px) {
    margin-top: 16px;
  }
`;

export const AddToCartButton = styled.button`
  padding: 12px 24px;
  min-height: 44px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 0;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
  }
`;

export const BuyNowButton = styled.button`
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
`;

export const ProductInfo = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
`;

export const InfoTitle = styled.h3`
    font-size: 18px;
    margin: 10px 0;
`;

export const InfoText = styled.p`
    font-size: 14px;
    line-height: 1.5;
    margin: 10px 0;
`;
