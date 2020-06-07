import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import CanvasDraw from 'react-canvas-draw';
import './Lienzo.css';

const Lienzo = ({ desactivarCanvas, ancho, alto, getPokemon, setPokemon }) => {
  const calulo = useRef();
  return (
    <>
      <div className='Lienzo'>
        <CanvasDraw
          hideGrid
          ref={calulo}
          disabled={desactivarCanvas}
          lazyRadius={0}
          brushRadius={2}
          catenaryColor={'black'}
          brushColor={'black'}
          canvasWidth={ancho}
          canvasHeight={alto}
        />
        {desactivarCanvas && (
          <Button
            className='my-4'
            onClick={async () => {
              const poke = getPokemon();
              await setPokemon(poke);
              calulo.current.clear();
            }}
          >
            Volver a dibujar
          </Button>
        )}
      </div>
    </>
  );
};

export default Lienzo;
