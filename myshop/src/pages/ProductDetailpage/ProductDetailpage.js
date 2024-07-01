import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetOneProduct } from "../../hooks/useGetProduct";
import { useAddToCart } from "../../hooks/useCart";
import { useAddToLike } from "../../hooks/useLike";
import {
    Container,
    ImageContainer,
    Image,
    DetailsContainer,
    TitleContainer,
    Title,
    HeartButton,
    Brand,
    Category,
    BrandName,
    CategoryPath,
    Description,
    Price,
    Color,
    SKU,
    Label,
    Select,
    ButtonContainer,
    AddToCartButton,
    BuyNowButton,
    ProductInfo,
    InfoTitle,
    InfoText,
} from "./protudctDetailpageStyles";
import Toast, { notify } from "../../components/Toast/Toast";

export default function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const { data, error, isLoading } = useGetOneProduct(id);
    const [selectedSize, setSelectedSize] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    const addToCartMutation = useAddToCart();
    const addToLikeMutation = useAddToLike();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading product details</div>;
    }

    const stockArray = Object.keys(data.stock).map((size) => ({
        size: size,
        quantity: data.stock[size],
    }));

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        const cartItem = {
            productId: data._id,
            name: data.name,
            size: selectedSize,
            price: data.price,
            quantity: 1,
        };

        addToCartMutation.mutate(cartItem);
    };

    const handleBuyNow = () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        notify(`Proceeding to buy ${data.name} (Size: ${selectedSize})!`);
    };

    const handleLikeClick = () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        const likeItem = {
            productId: data._id,
            name: data.name,
            price: data.price,
        };

        addToLikeMutation.mutate(likeItem);
        setIsLiked(true);
    };

    return (
        <Container>
            <div style={{ display: "flex" }}>
                <Toast />
                <ImageContainer>
                    <Category>
                        <BrandName>{data.brand}</BrandName>
                        <CategoryPath>
                            {data.bigCategory} > {data.category.main} >{" "}
                            {data.category.sub}
                        </CategoryPath>
                    </Category>
                    <Image src={data.image} alt={data.name} />
                </ImageContainer>
                <DetailsContainer>
                    <TitleContainer>
                        <Title>{data.name}</Title>
                        <HeartButton
                            onClick={handleLikeClick}
                            isLiked={isLiked}
                        >
                            ♥
                        </HeartButton>
                    </TitleContainer>
                    <Price>Price: ${data.price}</Price>
                    <Color>Color: {data.color}</Color>
                    <Label htmlFor="size-select">Size: </Label>
                    <Select
                        id="size-select"
                        value={selectedSize}
                        onChange={handleSizeChange}
                    >
                        <option value="" disabled>
                            선택
                        </option>
                        {stockArray.map((item, index) => (
                            <option key={index} value={item.size}>
                                {item.size} - {item.quantity} in stock
                            </option>
                        ))}
                    </Select>
                    <ButtonContainer>
                        <AddToCartButton
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                        >
                            장바구니 담기
                        </AddToCartButton>
                        <BuyNowButton
                            onClick={handleBuyNow}
                            disabled={!selectedSize}
                        >
                            바로 구매하기
                        </BuyNowButton>
                    </ButtonContainer>
                    <ProductInfo>
                        <InfoTitle>상품정보</InfoTitle>
                        <InfoText>상품번호: {data.sku}</InfoText>
                        <Description>{data.description}</Description>
                    </ProductInfo>
                </DetailsContainer>
            </div>
            <div>
                <InfoTitle>브랜드알림</InfoTitle>
                <InfoText>
                    <InfoTitle>[Order / Delivery]</InfoTitle>
                    - 택배사는 JY택배이며, 5만원 이상 구매 시 무료 배송 혜택이
                    적용됩니다. (일부 JJ택배, KK통운 이용)
                    <br />
                    - 상품 배송은 결제 완료일로부터 영업일 기준 1-3일 소요되며,
                    예약 배송은 기재된 날짜부터 순차적으로 진행 됩니다.
                    <br />
                    - 평일 오전 9시 주문 건까지 당일 출고 되며, 그 이후 주문
                    건은 익일 출고 작업 진행됩니다.(일부지역 제외)
                    <br />
                </InfoText>
                <InfoTitle>[EXCHANGE & RETURN]</InfoTitle>
                <InfoText>
                    - 상품 수령 일로부터 48시간 이내 반드시 QnA게시판을 통해
                    접수해주시고, 14일 이내에 상품 회수가 완료되어야 가능합니다.
                    <br />
                    - 접수 확인되지 않은 반품의 경우 임의 반송 처리 됩니다.
                    <br />
                    - 또한 수거 확인까지 혼선, 지연이 있을 수 있으니 반드*시
                    받아보신 택배사에 회수 신청* 해주시기 바랍니다.
                    <br />
                    - 교환은 고객님 성함으로 배송비를 입금해주셔야 정상 처리
                    가능합니다. (입금 후 문의 글 작성 부탁 드립니다.)
                    <br />
                    '은행은행 : (주)지윤지윤 1234-456-98765'
                    <br />
                    - 모든 교환/반품은 제품 수거 완료 후 상품 검수 및 배송비
                    입금 확인 후 재출고 처리 됩니다.
                    <br />
                </InfoText>
                <InfoTitle>반품 주소지</InfoTitle>
                <InfoText>
                    - KK통운 : 도도도 시시시 면면면 로로로100번길 111-1 1동 (
                    {data.brand}) 물류센터
                    <br />- JJ택배 : 시시시 구구구 로로로 123 45층 {data.brand}
                    <br />
                    *반드시 반품 택배사 그대로 접수 신청 해주시기 바랍니다*
                    <br />
                </InfoText>
            </div>
        </Container>
    );
}
