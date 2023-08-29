import { React, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { scrollTop } from '../../atom';
import { BiArrowToTop } from 'react-icons/bi';

function ScrollTop() {
  const [topBtn, setTopBtn] = useRecoilState(scrollTop);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollY > 200 ? setTopBtn(true) : setTopBtn(false);
  }, [setTopBtn]);

  return (
    <BiArrowToTop
      onClick={handleTop}
      size='5rem'
      float='right'
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        cursor: 'pointer',
        zIndex: '99999',
      }}
    />
  );
}

export default ScrollTop;
