import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;
export const ImageContainer = styled.div`
    flex: 1;
    padding-right: 20px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const DetailsContainer = styled.div`
    flex: 1;
    padding-left: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
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

    &:focus {
        outline: none;
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
`;

export const AddToCartButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 10px;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
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
    margin-bottom: 10px;
`;
