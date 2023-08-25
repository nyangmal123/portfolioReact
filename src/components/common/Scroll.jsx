import { React, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { scroll } from '../../atom';
import { BiArrowToTop } from 'react-icons/bi';

function Scroll() {
  const [topBtn, setTopBtn] = useRecoilState(scroll);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollY > 200 ? setTopBtn(true) : setTopBtn(false);
  }, []);

  return (
    <>
      <BiArrowToTop onClick={handleTop} />
    </>
  );
}

export default Scroll;
