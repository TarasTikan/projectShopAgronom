import { useEffect, useState } from "react"
import { ArrowIcon, BtnBackToTop, ProgressCircle, WhiteBackground} from './BackToTopBtn.styled';
export const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const totalScroll = scrollHeight - clientHeight;
    const scrollPercentage = Math.round((scrollTop * 100) / totalScroll);

    setScrollProgress(scrollPercentage);
    setShowButton(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <BtnBackToTop onClick={scrollUp} scrollPercentage={scrollProgress}>
          <ProgressCircle scrollPercentage={scrollProgress} />
          <WhiteBackground />
          <ArrowIcon>&#x1F815;</ArrowIcon>
        </BtnBackToTop>
      )}
    </>
  );
};