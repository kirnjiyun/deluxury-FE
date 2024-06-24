import React, { useState, useEffect } from "react";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import HotProductCarousel from "../../components/carousel/hot/HotProductCarousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
    MainContainer,
    SnapContainer,
    Row,
    Col,
    FullscreenSection,
    ContentSection,
} from "./HomepageStyles";
import { useGetProduct } from "../../hooks/useGetProduct";
import LazyImage from "../../components/LazyImage/LazyImage";
import { useInView } from "react-intersection-observer";

const Homepage = () => {
    const { data, isLoading, error, isError } = useGetProduct();
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageSources = [
        "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/FSH-1719210391887-desktopheaderjj10h.jpg",
        "https://kr.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/collection/fall-winter-24-show/MEN_FW24_BC_08_DI3.jpg?wid=2400",
        "https://media.gucci.com/content/HeroRegularStandard_1600x675/1713259886/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240207-0011-7480-FULL-sRGB_001_Default.jpg",
        "https://assets.hermes.com/is/image/hermesedito/P_169_AH23_F_Equus?fit=wrap%2C0&wid=1920",
        "https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-videos/folder-femme/dior_diorchrono_main16_9_en/44023895-1-fre-FR/dior_diorchrono_main16_9_en.jpg?imwidth=1850",
    ];

    useEffect(() => {
        if (inView) {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % imageSources.length
            );
        }
    }, [inView, imageSources.length]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data: {error.message}</div>;

    return (
        <MainContainer>
            <SnapContainer>
                {imageSources.map((src, index) => (
                    <FullscreenSection
                        key={index}
                        ref={index === currentImageIndex ? ref : null}
                    >
                        <LazyImage src={src} alt={`Lazy Image ${index + 1}`} />
                    </FullscreenSection>
                ))}
            </SnapContainer>
            <ContentSection>
                <NewProductCarousel />
                <Row>
                    {data?.map((product) => (
                        <Col key={product.sku}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </ContentSection>
        </MainContainer>
    );
};

export default Homepage;
