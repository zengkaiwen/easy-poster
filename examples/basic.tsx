import * as React from 'react';
import styled from 'styled-components';

import { createPoster } from 'easyposter';

const Wrapper = styled.div`
  img {
    width: 350px;
    height: 812px;
  }
`;

const Basic = () => {
  const [poster, setPoster] = React.useState('');

  React.useEffect(() => {
    createPoster({
      type: 'stage',
      style: {
        width: 750,
        height: 1624,
      },
      children: [
        {
          type: 'image',
          src: './assets/qrcode.png',
          style: {
            width: 200,
            height: 200,
            left: 275,
            top: 300,
          },
        },
      ],
    }).then((stage) => {
      setPoster(stage.exportImageSrc('png'));
    });
  }, []);

  return (
    <Wrapper>
      <h1>Easy Poster</h1>
      <p>
        <img src={poster} alt="poster" />
      </p>
    </Wrapper>
  );
};

export default Basic;
