import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  position: relative;
  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 0;
  word-break: break-word;
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ItemBrand = styled.p`
  font-size: 14px;
  margin: 4px 0 0;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ItemPrice = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: #000;
  margin: 0 0 0 auto;
  flex-shrink: 0;
  @media (max-width: 480px) {
    margin: 8px 0 0;
    width: 100%;
  }
`;

export const ItemSize = styled.p`
  font-size: 14px;
  color: #888;
  margin: 2px 0 0;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  color: #555;
  cursor: pointer;
  flex-shrink: 0;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    max-height: 200px;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 4px;
`;

export const QuantityButton = styled.button`
  padding: 8px 12px;
  min-width: 44px;
  min-height: 44px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
  @media (max-width: 480px) {
    min-width: 40px;
    min-height: 40px;
    padding: 6px 10px;
  }
`;

export const QuantityDisplay = styled.span`
  padding: 6px 12px;
  font-size: 14px;
  min-width: 2ch;
  text-align: center;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  min-width: 44px;
  min-height: 44px;
  line-height: 1;
  @media (max-width: 480px) {
    top: 6px;
    right: 6px;
    padding: 4px;
    min-width: 36px;
    min-height: 36px;
    font-size: 18px;
  }
`;
