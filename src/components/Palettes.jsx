import styled from 'styled-components';

const PaletteItem = styled.div`
  position: relative;
  background-color: ${(props) => props.colorCode};

  & p {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
`;

const DesignSampleContainer = styled.div`
  background-color: ${(props) => props.bg};

`;
function Palettes(props) {
  const { colorPalettes, bg } = props;
  return (
    <div class="Container">
      <div class="Color-palettes-container">
        {colorPalettes.map((colorPalette) => {
          const { colorCode } = colorPalette;
          return (
            <PaletteItem
              key={colorCode}
              colorCode={colorCode}
              class="Palette-item"
            >
              <p>{colorCode}</p>
            </PaletteItem>
          );
        })}
      </div>
      <DesignSampleContainer bg={bg}/>
    </div>
  );
}

export default Palettes;
