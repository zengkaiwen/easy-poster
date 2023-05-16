import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createPoster } from '../src';

const Wrapper = styled.div`
  img {
    width: 350px;
    height: 812px;
  }
`;

function App() {
  const [img, setImg] = useState('');

  useEffect(() => {
    console.log(createPoster);
    createPoster(
      {
        type: 'stage',
        style: {
          width: 750,
          height: 1624,
        },
        children: [
          {
            type: 'image',
            src: '/assets/qrcode.png',
            style: {
              width: 200,
              height: 200,
              left: 275,
              top: 300,
            },
          },
        ],
      },
      (v) => {}
    ).then((stage) => {
      console.log(stage);
      console.log(stage.layout);
      setImg(stage.exportImageSrc('png'));
    });
  }, []);

  return (
    <Wrapper>
      <h1>Easy Poster</h1>
      <p>
        <img src={img} alt="" />
      </p>
    </Wrapper>
  );
}

export default App;
