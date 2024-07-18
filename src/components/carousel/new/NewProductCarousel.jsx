import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./newProductCarouselStyles";
import hardcodedItems from "./hardcodedItems";

export default function NewProductCarousel({ items = hardcodedItems }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (items.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [items]);

    const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);
    const goToPrevSlide = () =>
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + items.length) % items.length
        );
    const goToNextSlide = () =>
        setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);

    return (
        <S.CarouselContainer>
            <S.CarouselSlider
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {items.map((item, index) => (
                    <S.CarouselSlide key={index}>
                        <S.AdBadge>AD</S.AdBadge>
                        <S.SlideImage>
                            <img
                                src={item.image}
                                alt={item.brand}
                                style={{
                                    height: "600px",
                                }}
                            />
                        </S.SlideImage>
                    </S.CarouselSlide>
                ))}
            </S.CarouselSlider>
            <S.SlideControls>
                <S.ControlButton onClick={goToPrevSlide}>&lt;</S.ControlButton>
                <S.ControlButton onClick={goToNextSlide}>&gt;</S.ControlButton>
            </S.SlideControls>
            <S.SlideIndicators>
                {items.map((_, index) => (
                    <S.IndicatorButton
                        key={index}
                        onClick={() => goToSlide(index)}
                        active={index === currentSlide}
                    />
                ))}
            </S.SlideIndicators>
        </S.CarouselContainer>
    );
}
