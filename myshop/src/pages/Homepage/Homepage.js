import React, { useState, useEffect } from "react";
import NewsLetterSignUp from "../../components/NewsLetterSignup/NewsLetterSignup";
import {
    MainContainer,
    SnapContainer,
    FullscreenSection,
    ContentSection,
} from "./HomepageStyles";
import { useGetProduct } from "../../hooks/useGetProduct";
import LazyImage from "../../components/LazyImage/LazyImage";
import { useInView } from "react-intersection-observer";

const Homepage = () => {
    const { data, isLoading, error, isError } = useGetProduct();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageSources = [
        "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/FSH-1719210391887-desktopheaderjj10h.jpg",
        "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_TRAVEL_HORIZON_FEIFEI_MAIN_02_LVCOM_2048x1152_DI3.jpg?wid=1440",

        "https://kr.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/collection/fall-winter-24-show/MEN_FW24_BC_08_DI3.jpg?wid=2400",

        "https://media.gucci.com/content/HeroRegularStandard_1600x675/1713259886/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240207-0011-7480-FULL-sRGB_001_Default.jpg",
        "https://wwd.com/wp-content/uploads/2024/06/CELEBRITY_GONG_YOO_ANNOUNCEMENT_VISUAL.png?w=1000&h=563&crop=1",
        "https://media.gucci.com/content/DiaryArticleDouble_Standard_1400x894/1691000129/DiaryArticleDouble_Gucci-FallWinter23-Collection-July23-002_001_Default.jpg",
        "https://assets.hermes.com/is/image/hermesedito/P_169_AH23_F_Equus?fit=wrap%2C0&wid=1920",
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
                <NewsLetterSignUp />
            </ContentSection>
        </MainContainer>
    );
};

export default Homepage;
