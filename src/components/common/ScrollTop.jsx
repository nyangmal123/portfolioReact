import { React, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkmode, scrollTop } from '../../atom';
import { BiArrowToTop } from 'react-icons/bi';

function ScrollTop() {
  const [topBtn, setTopBtn] = useRecoilState(scrollTop);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = useRecoilValue(darkmode);

  useEffect(() => {
    window.scrollY > 200 ? setTopBtn(true) : setTopBtn(false);
  }, [setTopBtn]);

  return (
    <BiArrowToTop
      onClick={handleTop}
      color={isDark ? 'white' : '5e4c32'}
      size='5rem'
      float='right'
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        cursor: 'pointer',
        zIndex: '99999',
        visibility: `${(topBtn) => (topBtn ? 'visible' : 'hidden')}`,
      }}
    />
  );
}

export default ScrollTop;
