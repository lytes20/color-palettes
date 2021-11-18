import { useState } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import './App.css';
import Palettes from './components/Palettes';
import { palettesDocs } from './data';

const PalettesWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: ${(props) => props.display}
`;

function App() {
  const [current, setCurrent] = useState(0);
  const length = palettesDocs.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="App">
      <FaArrowAltCircleLeft className="Left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="Right-arrow" onClick={nextSlide} />
      {palettesDocs.map((palettesDocsItem, index) => {
        const { colorPalettes, bg } = palettesDocsItem;
        return (
          <PalettesWrapper key={index} display={index === current ? 'block' : 'none'}>
            <Palettes colorPalettes={colorPalettes} bg={bg}/>
          </PalettesWrapper>
        );
      })}
    </div>
  );
}

export default App;
