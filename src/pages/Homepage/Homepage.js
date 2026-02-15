import React, { useState, useEffect } from 'react';
import NewsLetterSignUp from '../../components/NewsLetterSignup/NewsLetterSignup';
import {
  MainContainer,
  SnapContainer,
  FullscreenSection,
  ContentSection,
} from './HomepageStyles';
import { useGetProduct } from '../../hooks/useGetProduct';
import LazyImage from '../../components/LazyImage/LazyImage';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '../../components/ui/Spinner';
import { ErrorMessage } from '../../components/ui/ErrorMessage';

const HERO_IMAGES = [
  'https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/FSH-1719210391887-desktopheaderjj10h.jpg',
  'https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_TRAVEL_HORIZON_FEIFEI_MAIN_02_LVCOM_2048x1152_DI3.jpg?wid=1440',
  'https://kr.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/collection/fall-winter-24-show/MEN_FW24_BC_08_DI3.jpg?wid=2400',
  'https://media.gucci.com/content/HeroRegularStandard_1600x675/1713259886/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240207-0011-7480-FULL-sRGB_001_Default.jpg',
  'https://wwd.com/wp-content/uploads/2024/06/CELEBRITY_GONG_YOO_ANNOUNCEMENT_VISUAL.png?w=1000&h=563&crop=1',
  'https://media.gucci.com/content/DiaryArticleDouble_Standard_1400x894/1691000129/DiaryArticleDouble_Gucci-FallWinter23-Collection-July23-002_001_Default.jpg',
  'https://assets.hermes.com/is/image/hermesedito/P_169_AH23_F_Equus?fit=wrap%2C0&wid=1920',
];

const Homepage = () => {
  const { isLoading, error, isError, refetch } = useGetProduct();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }
  }, [inView]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Spinner size="large" />
      </div>
    );
  }
  if (isError) {
    return (
      <ErrorMessage
        message={error?.message || '데이터를 불러오지 못했습니다.'}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <MainContainer>
      <SnapContainer>
        {HERO_IMAGES.map((src, index) => (
          <FullscreenSection key={index} ref={index === currentImageIndex ? ref : null}>
            <LazyImage src={src} alt={`Hero ${index + 1}`} />
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
