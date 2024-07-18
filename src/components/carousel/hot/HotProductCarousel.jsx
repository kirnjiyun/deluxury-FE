import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./hotProductCarouselStyles";

const hardcodedItems = [
    {
        id: "1",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 1",
        category: "Women",
        type: "Top",
        brand: "Brand A",
    },
    {
        id: "2",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 2",
        category: "Men",
        type: "Bottom",
        brand: "Brand B",
    },
    {
        id: "3",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 3",
        category: "Women",
        type: "Dress",
        brand: "Brand C",
    },
    {
        id: "4",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 4",
        category: "Men",
        type: "Jacket",
        brand: "Brand D",
    },
    {
        id: "5",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 5",
        category: "Women",
        type: "Skirt",
        brand: "Brand E",
    },
    {
        id: "6",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 6",
        category: "Men",
        type: "Shirt",
        brand: "Brand F",
    },
    {
        id: "7",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 7",
        category: "Women",
        type: "Top",
        brand: "Brand G",
    },
    {
        id: "8",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 8",
        category: "Men",
        type: "Pants",
        brand: "Brand H",
    },
    {
        id: "9",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 9",
        category: "Women",
        type: "Coat",
        brand: "Brand I",
    },
    {
        id: "10",
        image: "https://via.placeholder.com/200x300",
        name: "Product Name 10",
        category: "Men",
        type: "Sweater",
        brand: "Brand J",
    },
];

export default function HotProductCarousel({ items = hardcodedItems }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const colors = [
        "rgb(255, 255, 204)",
        "rgb(229, 255, 204)",
        "rgb(187, 221, 255)",
        "rgb(255, 229, 204)",
        "rgb(213, 255, 170)",
        "rgb(187, 255, 221)",
        "rgb(255, 187, 221)",
        "rgb(255, 204, 204)",
        "rgb(221, 255, 187)",
        "rgb(204, 255, 229)",
        "rgb(255, 187, 187)",
        "rgb(255, 221, 187)",
        "rgb(221, 187, 255)",
        "rgb(255, 204, 229)",
        "rgb(255, 213, 170)",
        "rgb(255, 255, 170)",
        "rgb(204, 229, 255)",
        "rgb(255, 170, 170)",
        "rgb(255, 255, 187)",
        "rgb(229, 204, 255)",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [items]);

    if (!items) {
        return "no";
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + items.length) % items.length
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    };

    const goToProductDetailPage = (id) => {
        navigate(`/products/${id}`);
    };

    const slidesPerView = window.innerWidth >= 768 ? 2 : 1;

    return (
        <S.CarouselContainer>
            <S.CarouselSlider
                style={{
                    transform: `translateX(-${
                        currentSlide * (100 / slidesPerView)
                    }%)`,
                }}
            >
                {items.map((item, index) => (
                    <S.CarouselSlide
                        key={index}
                        $backgroundColor={colors[index % colors.length]}
                        onClick={() => goToProductDetailPage(item.id)}
                        $slidesPerView={slidesPerView}
                    >
                        <S.SlideImage>
                            <S.SlideImageContent
                                $backgroundImage={item.image}
                            />
                        </S.SlideImage>
                        <S.SlideContent>
                            <S.SlideTitle>{item.name}</S.SlideTitle>
                            <S.SlideDescription>
                                <S.SlideInfo>
                                    <div>{item.category}</div>
                                    <div>{item.type}</div>
                                    <div>{item.brand}</div>
                                </S.SlideInfo>
                            </S.SlideDescription>
                        </S.SlideContent>
                    </S.CarouselSlide>
                ))}
            </S.CarouselSlider>
            <S.SlideIndex>
                {Math.floor(currentSlide / slidesPerView) + 1} /{" "}
                {Math.ceil(items.length / slidesPerView)}
            </S.SlideIndex>
            <S.SlideControls>
                <S.ControlButton onClick={goToPrevSlide}>&lt;</S.ControlButton>
                <S.ControlButton onClick={goToNextSlide}>&gt;</S.ControlButton>
            </S.SlideControls>
            <S.SlideIndicators>
                {Array.from({
                    length: Math.ceil(items.length / slidesPerView),
                }).map((_, index) => (
                    <S.IndicatorButton
                        key={index}
                        onClick={() => goToSlide(index * slidesPerView)}
                        $active={
                            index === Math.floor(currentSlide / slidesPerView)
                        }
                    />
                ))}
            </S.SlideIndicators>
        </S.CarouselContainer>
    );
}
